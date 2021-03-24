package com.boot.todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boot.todo.entity.Todo;

@Mapper
public interface TodoMapper {

	public List<Todo> selectAll();

	public void add(Todo todo);

	public void update(Todo todo);

}
