interface AuthLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      Auth
      {children}
    </div>
  );
};

export default DocumentsLayout;
