import { TodoList } from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
}
