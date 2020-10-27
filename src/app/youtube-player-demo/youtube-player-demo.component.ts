import {
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild
} from '@angular/core';

interface Video {
  id: string;
  name: string;
}

const VIDEOS: Video[] = [
  {
    id: 'GqGpK01juSE',
    name: 'Wine, Water & Bread',
  },
  {
    id: 'gSTZZwgOwCk',
    name: 'Wine Promo',
  },
  {
    id: '271319801',
    name: 'Follower',
  },
  // {//vimeo...get YouTube ID
  //   id: 'bEO7uJpMkHU',
  //   name: 'Walk Again',
  // },
  {
    id: 'BqTcF6LS7Aw',
    name: 'Dreaming of America',
  },
  // {
  //   id: 'invalidname',
  //   name: 'Invalid',
  // },
];

@Component({
  selector: 'youtube-player-demo',
  templateUrl: 'youtube-player-demo.component.html',
  styleUrls: ['youtube-player-demo.component.scss'],
})
export class YoutubePlayerDemoComponent implements AfterViewInit, OnDestroy {
  date = new Date().getFullYear();
  
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;
  selectedVideo: Video | undefined = VIDEOS[0];
  videos = VIDEOS;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    // Automatically expand the video to fit the page up to 1200px x 720px
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }
}
