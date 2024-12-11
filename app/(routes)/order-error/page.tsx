import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function orderErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">¡OPS! Ha ocurrido un error en el pago. Vuelva a intentarlo mas tarde</h1>
          <Link href="/">
            <Button>Volver a ver todo los productos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
