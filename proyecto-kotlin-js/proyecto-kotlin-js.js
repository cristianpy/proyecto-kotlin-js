if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'proyecto-kotlin-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'proyecto-kotlin-js'.");
}
this['proyecto-kotlin-js'] = function (_, Kotlin) {
  'use strict';
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Enum = Kotlin.kotlin.Enum;
  HtmlTag.prototype = Object.create(Enum.prototype);
  HtmlTag.prototype.constructor = HtmlTag;
  function main$lambda$lambda$lambda(closure$items) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$items.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        li($receiver, element);
      }
    };
  }
  function main$lambda$lambda(closure$items) {
    return function ($receiver) {
      p($receiver, 'This is a test to generate HTML from Kotlin');
      ul($receiver, main$lambda$lambda$lambda(closure$items));
    };
  }
  function main(args) {
    var tmp$;
    var $receiver = new IntRange(1, 10);
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$('Item' + item);
    }
    var items = destination;
    if ((tmp$ = document.body) != null) {
      h1(tmp$, 'Hello Genbeta Dev!');
      div(tmp$, main$lambda$lambda(items));
    }
  }
  function HtmlTag(name, ordinal, text) {
    Enum.call(this);
    this.text = text;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function HtmlTag_initFields() {
    HtmlTag_initFields = function () {
    };
    HtmlTag$H1_instance = new HtmlTag('H1', 0, 'h1');
    HtmlTag$DIV_instance = new HtmlTag('DIV', 1, 'div');
    HtmlTag$P_instance = new HtmlTag('P', 2, 'p');
    HtmlTag$UL_instance = new HtmlTag('UL', 3, 'ul');
    HtmlTag$LI_instance = new HtmlTag('LI', 4, 'li');
  }
  var HtmlTag$H1_instance;
  function HtmlTag$H1_getInstance() {
    HtmlTag_initFields();
    return HtmlTag$H1_instance;
  }
  var HtmlTag$DIV_instance;
  function HtmlTag$DIV_getInstance() {
    HtmlTag_initFields();
    return HtmlTag$DIV_instance;
  }
  var HtmlTag$P_instance;
  function HtmlTag$P_getInstance() {
    HtmlTag_initFields();
    return HtmlTag$P_instance;
  }
  var HtmlTag$UL_instance;
  function HtmlTag$UL_getInstance() {
    HtmlTag_initFields();
    return HtmlTag$UL_instance;
  }
  var HtmlTag$LI_instance;
  function HtmlTag$LI_getInstance() {
    HtmlTag_initFields();
    return HtmlTag$LI_instance;
  }
  HtmlTag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HtmlTag',
    interfaces: [Enum]
  };
  function HtmlTag$values() {
    return [HtmlTag$H1_getInstance(), HtmlTag$DIV_getInstance(), HtmlTag$P_getInstance(), HtmlTag$UL_getInstance(), HtmlTag$LI_getInstance()];
  }
  HtmlTag.values = HtmlTag$values;
  function HtmlTag$valueOf(name) {
    switch (name) {
      case 'H1':
        return HtmlTag$H1_getInstance();
      case 'DIV':
        return HtmlTag$DIV_getInstance();
      case 'P':
        return HtmlTag$P_getInstance();
      case 'UL':
        return HtmlTag$UL_getInstance();
      case 'LI':
        return HtmlTag$LI_getInstance();
      default:Kotlin.throwISE('No enum constant html.HtmlTag.' + name);
    }
  }
  HtmlTag.valueOf_61zpoe$ = HtmlTag$valueOf;
  function h1($receiver, text) {
    return textElement($receiver, HtmlTag$H1_getInstance(), text);
  }
  function div($receiver, f) {
    return structuralElement($receiver, HtmlTag$DIV_getInstance(), f);
  }
  function p($receiver, text) {
    return textElement($receiver, HtmlTag$P_getInstance(), text);
  }
  function ul($receiver, f) {
    return structuralElement($receiver, HtmlTag$UL_getInstance(), f);
  }
  function li($receiver, text) {
    return textElement($receiver, HtmlTag$LI_getInstance(), text);
  }
  function textElement$lambda(closure$text) {
    return function ($receiver) {
      $receiver.textContent = closure$text;
    };
  }
  function textElement($receiver, tag, text) {
    return createTag($receiver, tag, textElement$lambda(text));
  }
  function structuralElement$lambda(closure$f) {
    return function ($receiver) {
      closure$f($receiver);
    };
  }
  function structuralElement($receiver, tag, f) {
    return createTag($receiver, tag, structuralElement$lambda(f));
  }
  function createTag($receiver, tag, f) {
    var element = document.createElement(tag.text);
    f(element);
    $receiver.append(element);
    return element;
  }
  _.main_kand9s$ = main;
  Object.defineProperty(HtmlTag, 'H1', {
    get: HtmlTag$H1_getInstance
  });
  Object.defineProperty(HtmlTag, 'DIV', {
    get: HtmlTag$DIV_getInstance
  });
  Object.defineProperty(HtmlTag, 'P', {
    get: HtmlTag$P_getInstance
  });
  Object.defineProperty(HtmlTag, 'UL', {
    get: HtmlTag$UL_getInstance
  });
  Object.defineProperty(HtmlTag, 'LI', {
    get: HtmlTag$LI_getInstance
  });
  var package$html = _.html || (_.html = {});
  package$html.HtmlTag = HtmlTag;
  package$html.h1_46n0ku$ = h1;
  package$html.div_w0hmpq$ = div;
  package$html.p_46n0ku$ = p;
  package$html.ul_w0hmpq$ = ul;
  package$html.li_46n0ku$ = li;
  Kotlin.defineModule('proyecto-kotlin-js', _);
  main([]);
  return _;
}(typeof this['proyecto-kotlin-js'] === 'undefined' ? {} : this['proyecto-kotlin-js'], kotlin);
