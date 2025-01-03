import Editor from "./editor";
import Toolbar from "./toolbar";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD] flex flex-col items-center">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
