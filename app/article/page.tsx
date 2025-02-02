import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Article() {
  return (
    <div>
      <header className="bg-slate-900 text-slate-50 mb-5 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <h2 className="text-xl">新米SESの備忘録</h2>
        </div>
      </header>
      <main className="min-h-svh">
        <div className="flex flex-1 flex-col gap-4 p-16 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <p>test</p>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </main>
      <footer className="bg-slate-900 text-slate-50 bottom-0 w-full flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <p>© Atsushi</p>
      </footer>
    </div>
  );
}
