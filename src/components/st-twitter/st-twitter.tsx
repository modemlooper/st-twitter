import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'st-twitter',
  styleUrl: 'st-twitter.css'
})
export class Twitter {

  @Prop() user: string = 'stenciljs';
  @Prop() type: string = 'timeline';
  @Prop() hashtag: string = 'stenciljs';
  @Prop() text: string = '';
  @Prop() list: string = '';

  componentWillLoad() {

    const url = '//platform.twitter.com/widgets.js';

    // only load script once
    if (!Array.from(document.querySelectorAll('script')).some(elm => elm.id == 'twitter-js')) {
      let script = document.createElement('script');
      script.src = url;
      script.id = 'twitter-js';
      document.getElementsByTagName('head')[0].appendChild(script);
    }

  }

  renderType() {

    switch(this.type) {
      case 'timeline': return <a href={'//twitter.com/' + this.user} class="twitter-timeline"></a>;
      case 'follow': return <a href={'//twitter.com/' + this.user} class="twitter-follow-button" data-show-count="false"></a>;
      case 'hashtag': return <a href={'//twitter.com/intent/tweet?button_hashtag=' + this.hashtag} class="twitter-hashtag-button" data-text={this.text} data-show-count="false"></a>;
      case 'list': return <a class="twitter-timeline" href={'//twitter.com/' + this.user + '/lists/' + this.list}></a>
    }

  }

  render() {
    return (
      <div>
        {this.renderType()}
      </div>
    );
  }
}
