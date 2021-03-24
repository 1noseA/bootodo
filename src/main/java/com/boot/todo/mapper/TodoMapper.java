package com.boot.todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.boot.todo.entity.Todo;

@Mapper
public interface TodoMapper {
	// 全件
	public List<Todo> selectAll();

	// 未完了
	public List<Todo> selectIncomplete();

	// 完了
	public List<Todo> selectComplete();

	// 追加
	public void add(Todo todo);

	// 更新
	public void update(Todo todo);

	// 全削除
	public void delete();

}
