import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../service/blogservice.service';
import { IBlog } from '../interface/iblog';

@Component({
  selector: 'app-bloglisting',
  templateUrl: './bloglisting.component.html',
  styleUrls: ['./bloglisting.component.css']
})
export class BloglistingComponent implements OnInit {
  constructor(private service: BlogserviceService) {
    this.LoadBlogData();
  }
  lstblogdata:IBlog[]=[];
  ngOnInit(): void {

  }
  LoadBlogData() {
    this.service.LoadBlogData().subscribe(data => {
     
      this.lstblogdata = data;
     
    });
  }
  deleteblogdata(ID: any) {
    if (confirm("Do you want to remove?")) {
      this.service.RemoveBlogData(ID).subscribe(data => {
        this.LoadBlogData();
      });
    }
  }
}
