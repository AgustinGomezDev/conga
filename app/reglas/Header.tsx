import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"

const Header = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold pt-8'>Reglas de La Conga</h1>
      <Breadcrumb className="pt-2">
        <BreadcrumbList className="text-md">
          <BreadcrumbItem>
            <Link className='hover:text-foreground hover:underline transition-all' href="/">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Reglas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default Header