jQuery Required Star Plugin
====

Required Star plugin for jQuery inspired by GitHub Jobs pages.
You can see a working demo at [http://juno.github.com/jquery-requiredstar-plugin/](http://juno.github.com/jquery-requiredstar-plugin/).


Usage
----

### Markup

    <input name="name" type="text" class="required" />
    <textarea name="comment" class="required"></textarea>

### Code

    $(function() {
      $('input, textarea').requiredStar();
    });

### CSS

    input[type=text].required, input[type=password].required, textarea.required {
        background: white url(required_star.png) no-repeat 100% 50%;
    }
    
    textarea.required {
        background-position: 100% 0;
    }
    
    input[type=text].valid, input[type=password].valid, textarea.valid {
        background-image: none;
    }


Notes
----

*  Works in following browsers
   *  Chrome 8
   *  Firefox 3.6
   *  Safari 5


Changelog
----

*  v0.0.1 (Nov 17, 2010)
   *  Initial release


License
----

This plugin is dual licensed under the MIT and GPL licenses, just like jQuery itself.


Credits
----

*  [Junya Ogura](http://sooey.com/)
*  This plugin inspired by [GitHub Jobs](https://jobs.github.com/) job posting form
