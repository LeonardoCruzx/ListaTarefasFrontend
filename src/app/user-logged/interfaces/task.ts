import { Category } from './category';

export interface Task {
    id: Number;
    created_at: Date;
    updated_at: Date;
    final_date?: Date;
    content: String;
    concluded: Boolean;
    concluded_date: Date;
    user: Number;
    category: Category;
}
