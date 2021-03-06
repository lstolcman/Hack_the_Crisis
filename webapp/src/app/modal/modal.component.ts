import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataStorageService } from '../data-storage/data-storage.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  additionalInfo: FormGroup;
  faTimesCircle = faTimes;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitForm(): void {
    this.dataStorageService.setReliableDataSubmitted(true);
    this.dataStorageService.saveReliableInfo(this.additionalInfo.value);
    this.activeModal.close();
  }

  private initForm(): void {
    this.additionalInfo = new FormGroup({
      isReviewed: new FormControl('1', [Validators.required]),
      isEmotional: new FormControl('1', [Validators.required]),
      isExpert: new FormControl('1', [Validators.required]),
    });
  }
}
