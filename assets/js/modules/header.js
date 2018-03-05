(function Header() {
  const { component, getComponent } = UIkit;
  const {
    $,
    addClass,
    attr,
    before,
    css,
    hasAttr,
    offset,
  } = UIkit.util;

  component('header', {

    name: 'header',

    connected: () => {
    this.initialize();
},

  ready: () => {
    if (!this.section) {
      this.initialize();
    }
  },

  update: [

    {

      read: () => {
      this.prevHeight = this.height;
  this.height = this.$el.offsetHeight;
  const sticky = this.modifier && getComponent(this.sticky, 'sticky');
  if (sticky) {
    sticky.$props.top = this.section.offsetHeight <= window.innerHeight
      ? this.selector
      : offset(this.section).top + 300;
  }
},

  write: () => {
    if (this.placeholder && this.prevHeight !== this.height) {
      css(this.placeholder, { height: this.height });
    }
  },

  events: ['load', 'resize'],

},

],

  methods: {

    initialize: () => {
      this.selector = '.tm-header ~ [class*="uk-section"], .tm-header ~ * > [class*="uk-section"]';
      this.section = $(this.selector);
      this.sticky = $('[uk-sticky]', this.$el);
      this.modifier = attr(this.section, 'tm-header-transparent');

      if (!this.modifier || !this.section) {
        return;
      }

      addClass(this.$el, 'tm-header-transparent');

      this.placeholder = hasAttr(this.section, 'tm-header-transparent-placeholder')
        && before($('[uk-grid]', this.section), `<div class="tm-header-placeholder uk-margin-remove-adjacent" style="height: ${this.$el.offsetHeight}px"></div>`);

      const container = $('.uk-navbar-container', this.$el);
      const navbar = $('[uk-navbar]', this.$el);
      const cls = `uk-navbar-transparent uk-${this.modifier}`;

      addClass($('.tm-headerbar-top, .tm-headerbar-bottom'), `uk-${this.modifier}`);

      if (attr(navbar, 'dropbar-mode') === 'push') {
        attr(navbar, 'dropbar-mode', 'slide');
      }

      if (!this.sticky) {
        addClass(container, cls);
      } else {
        attr(this.sticky, {
          animation: 'uk-animation-slide-top',
          top: this.selector,
          'cls-inactive': cls,
        });
      }
    },

  },

});
}(UIkit));