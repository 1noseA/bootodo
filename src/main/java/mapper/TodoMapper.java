package mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import entity.Todo;

@Mapper
public interface TodoMapper {

	public List<Todo> selectAll();

	public void add(Todo todo);

}
