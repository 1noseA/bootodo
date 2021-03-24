package com.boot.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.boot.todo.entity.Todo;
import com.boot.todo.mapper.TodoMapper;

@Controller
public class TodoController {

	@Autowired
	TodoMapper todoMapper;

	@RequestMapping(value="/")
	public String index(Model model) {
		List<Todo> list = todoMapper.selectAll();
		model.addAttribute("todos", list);
		return "index";
	}

	@RequestMapping(value="/add")
	public String add(Todo todo) {
		todoMapper.add(todo);
		return "redirect:/";
	}

	@RequestMapping(value="/update")
	public String update(Todo todo) {
		todoMapper.update(todo);
		return "redirect:/";
	}
}
