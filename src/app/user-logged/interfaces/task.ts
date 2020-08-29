export interface Task {
    id: Number;
    created_at: Date;
    updated_at: Date;
    final_date?: Date;
    content: String;
    concluded: Boolean;
    user: Number;
    category: Number;
}
