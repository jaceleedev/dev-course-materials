import SolutionsAccess from "@/components/solutions-access";

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SolutionsAccess>{children}</SolutionsAccess>;
}
