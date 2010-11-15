jQuery Required Star Plugin
====

Usage
----

### Markup

    <input name="name" type="text" class="required" />

### Code

    $(function() {
      $('input').requiredStar();
    });

### CSS

    input[type=text].required {
        background: white url(required_star.png) no-repeat 100% 50%;
    }
    
    input[type=text].valid {
        background: none;
    }


Notes
----

*  Works in following browsers
   *  Chrome 8
   *  Firefox 3.6
   *  Safari 5


License
----

This plugin is dual licensed under the MIT and GPL licenses, just like jQuery itself.


Credits
----

*  [Junya Ogura](http://sooey.com/)
*  This plugin inspired by [GitHub Jobs](https://jobs.github.com/) job posting form
