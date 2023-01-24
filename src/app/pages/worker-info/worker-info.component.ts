import { Component } from "@angular/core";
import { faFacebookF, faGithub, faLinkedinIn, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

// @ts-ignore
declare var require: any;
const FileSaver = require("file-saver");

@Component({
  selector: "cv-worker-info",
  templateUrl: "./worker-info.component.html",
  styleUrls: ["./worker-info.component.scss"]
})
export class WorkerInfoComponent {
  public positions: Array<string> = ["Programmer", "Front-end Developer", " Angular Developer"];
  public linkedin = faLinkedinIn;
  public fb = faFacebookF;
  public git = faGithub;

  public telegram = faTelegram;
  public download = faCloudDownloadAlt;


  public downloadPdf() {
    const pdfUrl = "./assets/file/Mher_Frangyan.pdf";
    const pdfName = "Mher_Frangyan.pdf";
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}
