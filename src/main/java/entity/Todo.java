package entity;

import lombok.Data;

/**
 * テーブルのデータを保持するためのもの
 */
// lombokのgetter/setter自動生成のため
@Data
public class Todo {
	private long id;
	private String title;
	private int flg;
	private String time;
}
