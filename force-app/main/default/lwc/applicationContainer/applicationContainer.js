import { LightningElement, track, api } from 'lwc';


export default class ApplicationContainer extends LightningElement {

@track isModalOpen = false;


openModal() {
    // to open modal set isModalOpen tarck value as true
    this.isModalOpen = true;
  }

  closeModal() {
    // to close modal set isModalOpen tarck value as false
    this.isModalOpen = false;
    this.applied = false;
    this.finished = false;
  }

  

}
