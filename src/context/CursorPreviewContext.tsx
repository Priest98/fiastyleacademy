import { createContext, useContext, useState, useCallback } from "react";

interface PreviewState {
  visible: boolean;
  image: string;
  label: string;
  category: string;
}

interface CursorPreviewContextValue {
  preview: PreviewState;
  showPreview: (image: string, label: string, category: string) => void;
  hidePreview: () => void;
}

const CursorPreviewContext = createContext<CursorPreviewContextValue | null>(null);

export function CursorPreviewProvider({ children }: { children: React.ReactNode }) {
  const [preview, setPreview] = useState<PreviewState>({
    visible: false,
    image: "",
    label: "",
    category: "",
  });

  const showPreview = useCallback((image: string, label: string, category: string) => {
    setPreview({ visible: true, image, label, category });
  }, []);

  const hidePreview = useCallback(() => {
    setPreview(p => ({ ...p, visible: false }));
  }, []);

  return (
    <CursorPreviewContext.Provider value={{ preview, showPreview, hidePreview }}>
      {children}
    </CursorPreviewContext.Provider>
  );
}

export function useCursorPreview() {
  const ctx = useContext(CursorPreviewContext);
  if (!ctx) throw new Error("useCursorPreview must be inside CursorPreviewProvider");
  return ctx;
}
