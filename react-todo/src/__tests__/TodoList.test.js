import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the todo list with initial items", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
    expect(input.value).toBe("");
  });

  test("toggles a todo completion state", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    expect(todoItem).toHaveStyle("text-decoration: none");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteButton = todoItem.nextSibling;

    fireEvent.click(deleteButton);
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });

  test("does not add an empty todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addButton);

    expect(screen.queryByText("   ")).not.toBeInTheDocument();
  });
});
