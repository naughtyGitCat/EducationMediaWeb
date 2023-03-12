import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import Player,{ IPlayerOptions } from 'xgplayer';

@Component({
	selector: 'e-ngx-xgplayer',
	templateUrl: './e-ngx-xgplayer.component.html',
	styleUrls: ['./e-ngx-xgplayer.component.scss']
})

export class XGPlayerOptions implements IPlayerOptions {
            // 选择器
            id?: string;

            // DOM实例
            el?: HTMLElement;
    
            // 视频源
            url: string | Array<{src: string; type?: string}> = "";
    
            // 宽度(默认600)
            width?: number | string;
    
            // 高度（默认337.5）
            height?: number | string;
    
            // 流式布局（默认false）
            // 设置为流式布局，可使播放器宽度跟随父元素的宽度大小变化，且高度按照配置项中的高度和宽度的比例来变化
            fluid?: boolean;
    
            // 自适应视频内容宽高,可设置三种模式：
            //  1、fitVideoSize设置为fixWidth，表示容器宽度固定，容器高度按照视频内容比例增大或减小；
            //  2、fitVideoSize设置为fixHeight，表示容器高度固定，容器宽度按照视频内容比例增大或减小；
            //  3、fitVideoSize设置为auto，表示容器高度或宽度按照视频内容比例增大
            fitVideoSize?: 'fixWidth' | 'fixHeight' | 'auto';
    
            // 音量（默认0.6,参考值：0 ~ 1)
            volume?: number;
    
            // 自动播放（默认false）
            autoplay?: boolean;
    
            // 静音自动播放（默认false）
            autoplayMuted?: boolean;
    
            // 循环播放(默认false)
            loop?: boolean;
    
            // 预加载
            preload?: string;
    
            // 初始化显示视频首帧（默认false,该配置在移动端无效)
            videoInit?: boolean;
    
            // 封面图
            poster?: string;
    
            // 倍速播放
            // 播放器支持设置视频的当前播放速度。可通过defaultPlaybackRate设置初始速度。
            playbackRate?: number[];
            defaultPlaybackRate?: number;
    
            // 视频旋转按钮配置项
            rotate?: {
    
                // 只旋转内部video(默认false)
                innerRotate?: boolean;
    
                // 旋转方向是否为顺时针(默认false)
                clockwise?: boolean;
            };
    
            // 预览
            thumbnail?: {
    
                // 该视频资源所需预览小图数量
                pic_num: number;
    
                // 预览小图宽度
                width: number;
    
                // 预览小图高度
                height: number;
    
                // 	sprite图每列的预览小图数量
                col: number;
    
                // sprite图每行的预览小图数量
                row: number;
    
                // sprite图的源地址数组
                urls: string[];
            };
    
            // 下一集
            playNext?: {
                urlList: string[];
            };
    
            // 视频下载(默认false)
            download?: boolean;
    
            // 弹幕（具体用法参考https://github.com/bytedance/danmu.js）
            // danmu?: DanmuOptions;
    
            // 自研外挂字幕
            // textTrack?: TextTrack[];
    
            // 原生外挂字幕（参考https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API）
            // nativeTextTrack?: TextTrack[];
    
            // 外挂字幕样式
            textTrackStyle?: Record<string, string | number>;
    
            // 配置项修改外挂字幕控件的触发方式
            textTrackActive?: 'hover' | 'click';
    
            // 画中画
            pip?: boolean;
    
            // 迷你播放器
            miniplayer?: boolean;
    
            // 迷你播放器
            miniplayerConfig?: object;
    
            // 网页样式全屏
            cssFullscreen?: boolean;
    
            // 截图
            screenShot?: {
                hideButton?: boolean;
                iconText?: string;
                saveImg?: boolean;
            };
    
            // 预览本地视频
            preview?: {uploadEl?: HTMLElement};
    
            // 进度条特殊点标记
            progressDot?: Array<{time: number; text?: string; duration?: number, style?: object}>;
    
            // 键盘快捷键 默认值：'on'
            keyShortcut?: 'on' | 'off';
    
            // 插件生效前执行
            execBeforePluginsCall?: VoidFunction[];
    
            // 关闭video触发click事件后视频切换播放/暂停状态
            closeVideoClick?: boolean;
    
            // 关闭video触发dblclick事件后进入/退出全屏
            closeVideoDblclick?: boolean;
    
            // 关闭移动端下默认video触发touchend事件后视频切换播放/暂停状态
            closeVideoTouch?: boolean;
    
            // 关闭鼠标移出播放器范围时触发blur事件
            closePlayerBlur?: boolean;
    
            // 延迟触发blur事件的时间
            leavePlayerTime?: number;
    
            // 关闭鼠标移出播放器控制条范围时触发focus事件
            closeControlsBlur?: boolean;
    
            // 关闭播放器范围时移动鼠标时触发video focus
            closeFocusVideoFocus?: boolean;
    
            // 关闭播放器触发play事件时触发video focus
            closePlayVideoFocus?: boolean;
    
            // 关闭播放器的点击阻止冒泡
            closeVideoStopPropagation?: boolean;
    
            // 禁止拖动进度条
            disableProgress?: boolean;
    
            // 打开右键菜单
            enableContextmenu?: boolean;
    
            // 清晰度切换配置
            definitionActive?: 'hover' | 'click';
    
            // 关闭内置控件
            // eslint-disable-next-line max-len
            ignores?: Array<'cssFullscreen' | 'danmu' | 'enter'  | 'download' | 'errorRetry' | 'time' | 'localPreview' | 'logger' | 'memoryPlay' | 'pip' | 'playNext' | 'reload' | 'rotate' | 'screenShot' | 'definition' | 'error' | 'fullscreen' | 'i18n' | 'loading' | 'mobile' | 'pc' | 'play' | 'playbackRate' | 'poster' | 'progress' | 'replay' | 'start' | 'volume'>;
    
            // 关闭控制条， 默认true
            controls?: boolean;
    
            // 控制条选项配置
            controlsList?: Array<'nodownload' | 'nofullscreen' | 'noremoteplayback'>;
    
            // 播放镜像 https://support.apple.com/en-us/HT204289
            airplay?: boolean;
    
            // 功能插件开关配置
            // 通过播放器的配置可以实现插件动态开启和关闭，只要在功能插件读取该配置即可。
            pluginRule?: () => boolean;
    
            // 国际化
            lang?: string | object;
    
            // 白名单
            // 手机上video表现各异，自定义UI会有意想不到的情况发生，为了安全起见，播放器在手机上会关掉自定义UI功能，开发者可以通过白名单的方式开启此项功能
            whitelist?: [string | RegExp | ((ua: string) => boolean)];
    
            // 内联模式 https://webkit.org/blog/6784/new-video-policies-for-ios/
            // 该选项在手机观看时，开启ios和微信的内联模式
            playsinline?: boolean;
    
            // 手机调试
            // 要使用该功能，请先在开发者电脑安装 weinre
            debug?: {host: string; port: number};
    
            // 微信同层播放
            'x5-video-player-type'?: 'h5';
    
            // 微信全屏播放
            'x5-video-player-fullscreen'?: boolean;
    
            // 微信横竖屏控制
            'x5-video-orientation'?: 'landscape' | 'portraint';
    
            // 自定义配置
            customConfig?: Record<string, unknown>;
    
            //播放媒体类型
            mediaType?: string;
    
            domain?: string;
    
            kid?: string;
    
            disableSwipeHandler?: VoidFunction;
    
            enableSwipeHandler?: VoidFunction;
    
            allowSeekAfterEnded?: boolean;
    
            allowPlayAfterEnded?: boolean;
    
            disableStartLoad?: boolean;
    
            //播放错误提示
            errorTips?: string;
    
            // keyShortcutStep?: keyShortcutStepOptions;
    
            //关闭长按增加倍速功能
            disableLongPress?: boolean;
    
            //移动端支持双击暂停/播放
            enableVideoDbltouch?: boolean;
    
            //使播放器控制栏常驻不隐藏
            closeInactive?: boolean;
    
            //触发全屏时实现样式全屏横屏
            rotateFullscreen?: boolean;
    
            //关闭点击播放器video元素的阻止默认动作行为
            closeVideoPreventDefault?: boolean;
    
            //支持进度条只能拖动到已播过部分
            allowSeekPlayed?: boolean;
    
            //引用插件
            // controlPlugins?: Array<controlPluginOptions>;
    
            //不自动引用多语言插件
            closeI18n?: boolean;
    
            //视频起播时间（单位：秒）
            lastPlayTime?: number;
    
            //提示文字展示时长（单位：秒）
            lastPlayTimeHideDelay?: number;
    
            //隐藏中间按钮
            hideStartBtn?: boolean;
    
            //video元素样式
            videoStyle?: object;
    
            //是否定时检查播放卡死
            enableStallCheck?: boolean;
}

export class ENgxXGPlayerComponent implements OnInit, OnDestroy {
	@ViewChild('playerElem') playerElemRef: ElementRef = new ElementRef("");
	private player: any;
	private defaultOptions: IPlayerOptions =  new XGPlayerOptions();

	@Input() set options(value: XGPlayerOptions) {
		this.defaultOptions = {
			el: this.playerElemRef.nativeElement,
            url: value.url
		};
		this.defaultOptions = Object.assign(this.defaultOptions, value);
	}

	@Input() set plugins(value: { name: string, handler: (this: Player, player: Player) => void }[]) {
		value.forEach((plugin: { name: string, handler: (this: Player, player: Player) => void }) => {
			Player.install(plugin.name, plugin.handler);
		});
	}

	@Output() ready: EventEmitter<any> = new EventEmitter<any>();
	@Output() startplay: EventEmitter<any> = new EventEmitter<any>();
	@Output() playing: EventEmitter<any> = new EventEmitter<any>();
	@Output() paused: EventEmitter<any> = new EventEmitter<any>();
	@Output() ended: EventEmitter<any> = new EventEmitter<any>();
	@Output() error: EventEmitter<any> = new EventEmitter<any>();
	@Output() seeking: EventEmitter<any> = new EventEmitter<any>();
	@Output() seeked: EventEmitter<any> = new EventEmitter<any>();
	@Output() timeupdate: EventEmitter<any> = new EventEmitter<any>();
	@Output() waiting: EventEmitter<any> = new EventEmitter<any>();
	@Output() canplay: EventEmitter<any> = new EventEmitter<any>();
	@Output() canplaythrough: EventEmitter<any> = new EventEmitter<any>();
	@Output() durationchange: EventEmitter<any> = new EventEmitter<any>();
	@Output() volumechange: EventEmitter<any> = new EventEmitter<any>();
	@Output() complete: EventEmitter<any> = new EventEmitter<any>();
	@Output() destroy: EventEmitter<any> = new EventEmitter<any>();

	constructor() {
	}

	ngOnInit() {
		this.player = new Player(this.defaultOptions);
		this.initEvents();
	}

	ngOnDestroy() {
		this.player.destroy();
	}

	/**
	 * 初始化事件
	 */
	initEvents() {
		this.player.once('ready', () => {
			this.ready.emit(this);
		});
		this.player.once('complete', () => {
			this.complete.emit(this);
		});
		this.player.on('play', (evt: any) => {
			this.startplay.emit(evt);
		});
		this.player.on('playing', (evt: any) => {
			this.playing.emit(evt);
		});
		this.player.on('pause', (evt: any) => {
			this.paused.emit(evt);
		});
		this.player.on('ended', (evt: any) => {
			this.ended.emit(evt);
		});
		this.player.on('error', (evt: any) => {
			this.error.emit(evt);
		});
		this.player.on('seeking', (evt: any) => {
			this.seeking.emit(evt);
		});
		this.player.on('seeked', (evt: any) => {
			this.seeked.emit(evt);
		});
		this.player.on('timeupdate', (evt: any) => {
			this.timeupdate.emit(evt);
		});
		this.player.on('waiting', (evt: any) => {
			this.waiting.emit(evt);
		});
		this.player.on('canplay', (evt: any) => {
			this.canplay.emit(evt);
		});
		this.player.on('canplaythrough', (evt: any) => {
			this.canplaythrough.emit(evt);
		});
		this.player.on('durationchange', (evt: any) => {
			this.durationchange.emit(evt);
		});
		this.player.on('volumechange', (evt: any) => {
			this.volumechange.emit(evt);
		});
		this.player.once('destroy', () => {
			this.destroy.emit();
		});
	}

	/**
	 * 启动播放器，一般都是播放器内部隐式调用，主要功能是将 video 添加到 DOM
	 * @param {string} url 视频地址
	 */
	start(url: string) {
		this.player.start(url);
	}

	/**
	 * 播放视频
	 */
	play() {
		this.player.play();
	}

	/**
	 * 播放器重播视频，重播的组件就调用了这个方法，支持 beforeReplay 钩子，如果 beforeReplay 返回为 false 阻止重播动作。
	 */
	replay() {
		this.player.replay();
	}

	/**
	 * 暂停视频
	 */
	pause() {
		this.player.pause();
	}

	/**
	 * 重新加载视频
	 */
	reload() {
		this.player.reload();
	}

	/**
	 * 检测您的浏览器是否能播放不同类型的视频
	 * @param {string} mimeType 检测的类型
	 * @returns {boolean}
	 */
	canPlayType(mimeType: string): boolean {
		return this.player.canPlayType(mimeType);
	}

	/**
	 * 返回当前的缓冲片段时间范围，start表示缓冲起始时间，end表示缓存截止时间
	 * @returns [start,end]
	 */
	getBufferedRange(): any {
		return this.player.getBufferedRange();
	}
}