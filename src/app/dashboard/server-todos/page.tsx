export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
  title: "Listado de Todos",
  description: "SEO Title",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  console.log("construido");

  return (
     <div>
      <div className="w-full px-3 mx-5 mb-5">{<NewTodo />}</div>

      <TodosGrid todos={todos} />
    </div>
  );
}
