import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-info.component.css']
})

export class CourseInfoComponent implements OnInit{

    course!: Course;

    constructor(private activatedRoute: ActivatedRoute,
        private courseService: CourseService){ }

    ngOnInit(): void {
        this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get("id"))).subscribe({
            next: course => this.course = course,
            error: err => console.log("Error: ", err)
        });
    }

    save(): void{
        console.log("Trying to save...");
        this.courseService.save(this.course).subscribe({
            next: course => console.log("Save Successfully!"),
            error: err => console.log("Error", err)
        });
    }

}