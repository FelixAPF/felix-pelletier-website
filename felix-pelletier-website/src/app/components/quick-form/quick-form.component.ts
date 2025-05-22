import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { Textarea } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card'; // Optional: for styling
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quick-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule,
    InputTextModule,
    InputMaskModule,
    Textarea,
    ButtonModule,
    ToastModule,
    CardModule
  ],
  providers: [MessageService], // Provide MessageService for Toast
  templateUrl: './quick-form.component.html',
  styleUrls: ['./quick-form.component.css']
})
export class QuickFormComponent implements OnInit {
  quoteForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      nom: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]], // Basic US/Canada phone format
      email: ['', [Validators.required, Validators.email]],
      entreprise: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.quoteForm.controls; }

  onSubmit(): void {
    if (this.quoteForm.invalid) {
      this.messageService.add({severity:'warn', summary: 'Validation Error', detail: 'Please fill all required fields correctly.'});
      // Mark all fields as touched to display validation errors
      Object.values(this.quoteForm.controls).forEach(control => {
        control.markAsDirty();
      });
      return;
    }

    this.isLoading = true;
    const formData = this.quoteForm.value;

    // Example using Formspree.io - REPLACE 'YOUR_FORMSPREE_ID'
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; // << --- REPLACE THIS
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    this.http.post(formspreeEndpoint, formData, { headers: headers })
      .subscribe(
        response => {
          this.isLoading = false;
          this.messageService.add({severity:'success', summary: 'Success!', detail: 'Your request has been sent. Thank you!'});
          this.quoteForm.reset();
          // Optionally, reset touched/dirty states
           Object.keys(this.quoteForm.controls).forEach(key => {
            this.quoteForm.get(key)?.markAsPristine();
            this.quoteForm.get(key)?.markAsUntouched();
            this.quoteForm.get(key)?.updateValueAndValidity();
          });
        },
        error => {
          this.isLoading = false;
          console.error('Error sending email via Formspree', error);
          this.messageService.add({severity:'error', summary: 'Error', detail: 'Could not send your request. Please try again later or contact me directly.'});
        }
      );
  }
}