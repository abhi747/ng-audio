import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'minutesSeconds'
})
export class MinutesSecondsPipe implements PipeTransform {

	transform(value: number): string {
		const minutes: number = Math.floor(value / 60);
		return minutes + ':'
			+ (value - minutes * 60).toFixed(0).toString().padStart(2, '0');
	}

}
