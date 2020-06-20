import { Pipe, PipeTransform } from '@angular/core';
import Task from '../task.model';

@Pipe({ name: 'search' })

export class SearchPipe implements PipeTransform {
    transform(toDoList: Array<Task>, searchText: string): any {
        if (searchText) {
            const toDoListFilter = toDoList.filter(task => task.title.toLowerCase().includes(searchText));
            console.log(toDoListFilter);
            return toDoListFilter;
        }
        return toDoList;        
    }
}