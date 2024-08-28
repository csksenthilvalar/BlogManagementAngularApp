import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../service/blogservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blogaddnew',
  templateUrl: './blogaddnew.component.html',
  styleUrls: ['./blogaddnew.component.css']
})
export class BlogaddnewComponent implements OnInit {
  [x: string]: any;
  messageclass = ''
  message = ''
  blogid: any;
  editdata: any;
  responsedata: any;
  datePipe: DatePipe = new DatePipe('en-US');
  date = new Date();
  transformDate = this.datePipe.transform(this.date, 'dd-MM-yyyy');
  constructor(private service: BlogserviceService, private route: ActivatedRoute,private router : Router) {
    this.blogid = this.route.snapshot.paramMap.get('id');
    if (this.blogid != null) {
      this.Updateblogs(this.blogid);
    }
  }
  ngOnInit(): void {

  }
  registerform = new FormGroup({
    id: new FormControl("0"),
    blogDesc: new FormControl("", Validators.required),
    userName: new FormControl("user1"),
    createdDate: new FormControl(this.transformDate, Validators.required),
  });

  SaveBlogs() {
    if (this.registerform.value.id == "0") {
      this.SaveBlogsdata();
    }
    else {
      this.UpdateBlogsdata();
    }
  }
  SaveBlogsdata() {
    if (this.registerform.valid) {
      this.service.SaveBlogData(this.registerform.value).subscribe(result => {
        if (result != null) {
          this.message = "Blog saved successfully. Blog is " + result.id;
          this.messageclass = "sucess"
          this.clearblog();
        }
        else {
          this.message = "Failed to Save"
          this.messageclass = "error"

        }
      });
    } else {
      this.message = "Please Enter valid data"
      this.messageclass = "error"
    }
  }
  UpdateBlogsdata() {
    if (this.registerform.valid) {
      this.service.UpdateBlogData(this.registerform.value).subscribe(result => {

        this.message = "Blog Updated successfully.";
        this.messageclass = "sucess"
        this.clearblog();
        this.router.navigate(['blog'])
      });
    } else {
      this.message = "Please Enter valid data"
      this.messageclass = "error"
    }
  }
  clearblog() {
    this.registerform = new FormGroup({
      id: new FormControl(""),
      blogDesc: new FormControl(""),
      userName: new FormControl(""),
      createdDate: new FormControl(""),
    });
  }

  Updateblogs(Id: any) {
    this.service.LoadBlogDatabycode(Id).subscribe(data => {

      this.editdata = data;

      this.registerform = new FormGroup({
        id: new FormControl(this.editdata.id),
        blogDesc: new FormControl(this.editdata.blogDesc),
        userName: new FormControl(this.editdata.userName),
        // createdDate: new FormControl(this.editdata.createdDate),
        createdDate: new FormControl(this.transformDate),
      });
    });


  }


}

