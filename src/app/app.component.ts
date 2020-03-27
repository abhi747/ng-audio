import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'audio-player';
	@ViewChild('progress', { static: false }) progress
	@ViewChild('player', { static: false }) player: any

	audioPlayFlag = false;
	percentCompleted = 0;
	currentTime = 0;
	audioTimer;
	timeLeft;

	constructor() { }

	setDuration(e) {
		this.timeLeft = this.player.nativeElement.duration;
	}

	play() {
		this.audioPlayFlag = !this.audioPlayFlag;
		if (this.audioPlayFlag)
			this.player.nativeElement.play();
		else
			this.player.nativeElement.pause();
	}

	volumeChange(event) {
		this.player.nativeElement.volume = event.target.value;
	}

	forward(forwardFlag) {
		if (forwardFlag)
			this.player.nativeElement.currentTime += 10;
		else
			this.player.nativeElement.currentTime -= 10;
	}

	handleProgress(event) {
		this.percentCompleted = this.player.nativeElement.currentTime
			/ this.player.nativeElement.duration * 100;

		this.currentTime = this.player.nativeElement.currentTime;
		this.timeLeft = this.player.nativeElement.duration - this.currentTime;

	}

	updateTimeline(event) {
		const updatedTime = (event.offsetX / this.progress.nativeElement.offsetWidth) * this.player.nativeElement.duration;
		this.player.nativeElement.currentTime = updatedTime;
	}

	audioEnd() {
		this.audioPlayFlag = !this.audioPlayFlag;
	}
}
