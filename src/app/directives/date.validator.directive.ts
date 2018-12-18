import {NG_VALIDATORS, Validator, AbstractControl, ValidatorFn} from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[validateDate]',
    providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
  })
  export class DateValidatorDirective implements Validator {
    @Input('validateDate') dateInput: string;

    validate(control: AbstractControl): {[key: string]: any} | null {
        var today = new Date();
        var start: Date = new Date(control.value);
        if (start.valueOf() <= today.valueOf()) 
            return {'startDateInvalid': {value: control.value}}

        return null;
    }
    isDateInstance(obj: any) {
        return obj instanceof Date && this.isValid(new Date(obj));
    }
    isValid(date: Date) {
        let formatExp = new RegExp("\d{1,2}/\d{1,2}/\d{4}");
        let dtString = date.toLocaleDateString('en-US');

         if (!formatExp.test(dtString)) return false;
        return this.isValidDate(dtString);
    }
    isCorrectFormat() {
        
    }
    //Getdate string
    getShortDate(dt: any) {
        var today = dt;
        var dd = today.getDate();

        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }
    //Validate date string
    isValidDate(dt: string) {
        const dateStr = dt;
        // Length of months (will update for leap years)
        const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        // Object to return if date is invalid
        const invalidObj = { 'date': true };

        // Parse the date input to integers
        const parts = dateStr.split('/');
        const month = parseInt(parts[0], 10);
        const day = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);

        // Make sure date is in range
        if (year < 2000 || year > 3000 || month === 0 || month > 12) {
            return invalidObj;
        }
        // Adjust for leap years
        if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
            monthLength[1] = 29;
        }
        // Check the range of the day
        if (!(day > 0 && day <= monthLength[month - 1])) {
            return invalidObj;
        };

        return null;
    }
  }