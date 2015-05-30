this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["repos"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <li>\n    <a href=\""
    + alias3(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"html_url","hash":{},"data":data}) : helper)))
    + "\"><h2 class = \"repoNames\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2></a>\n    <p>"
    + alias3(((helper = (helper = helpers.pushed_at || (depth0 != null ? depth0.pushed_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"pushed_at","hash":{},"data":data}) : helper)))
    + "</p>\n    <div class = \"stats\">\n      <p>"
    + alias3(((helper = (helper = helpers.launguage || (depth0 != null ? depth0.launguage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"launguage","hash":{},"data":data}) : helper)))
    + "</p>\n      <a href=\""
    + alias3(((helper = (helper = helpers.stargazers_url || (depth0 != null ? depth0.stargazers_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stargazers_url","hash":{},"data":data}) : helper)))
    + "\"><span class = \"octicon octicon-star\"></span>"
    + alias3(((helper = (helper = helpers.stargazers_count || (depth0 != null ? depth0.stargazers_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"stargazers_count","hash":{},"data":data}) : helper)))
    + "</a>\n      <a href=\""
    + alias3(((helper = (helper = helpers.forks_url || (depth0 != null ? depth0.forks_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forks_url","hash":{},"data":data}) : helper)))
    + "\"><span class = \"octicon octicon-repo-forked\"></span>"
    + alias3(((helper = (helper = helpers.forks_count || (depth0 != null ? depth0.forks_count : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"forks_count","hash":{},"data":data}) : helper)))
    + "</a>\n    </div>\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<img src=\""
    + alias3(((helper = (helper = helpers.avatar_url || (depth0 != null ? depth0.avatar_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"avatar_url","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" />\n\n<h1>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n<h2>"
    + alias3(((helper = (helper = helpers.login || (depth0 != null ? depth0.login : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"login","hash":{},"data":data}) : helper)))
    + "</h2>\n\n<hr>\n\n<span class=\"octicon octicon-location\"></span><span>"
    + alias3(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"location","hash":{},"data":data}) : helper)))
    + "</span>\n<span class=\"octicon octicon-clock\"></span>\n<span>Joined On"
    + alias3(((helper = (helper = helpers.created_at || (depth0 != null ? depth0.created_at : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"created_at","hash":{},"data":data}) : helper)))
    + "</span>\n\n<hr>\n\n<a href=\""
    + alias3(((helper = (helper = helpers.followers_url || (depth0 != null ? depth0.followers_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers_url","hash":{},"data":data}) : helper)))
    + "\"><h3>"
    + alias3(((helper = (helper = helpers.followers || (depth0 != null ? depth0.followers : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"followers","hash":{},"data":data}) : helper)))
    + "</h3></a>\n<span>Followers</span>\n\n<a href=\""
    + alias3(((helper = (helper = helpers.starred_url || (depth0 != null ? depth0.starred_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starred_url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.starred || (depth0 != null ? depth0.starred : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"starred","hash":{},"data":data}) : helper)))
    + "</a>\n<span>starred</span>\n\n<a href=\""
    + alias3(((helper = (helper = helpers.following_url || (depth0 != null ? depth0.following_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following_url","hash":{},"data":data}) : helper)))
    + "\"><h3>"
    + alias3(((helper = (helper = helpers.following || (depth0 != null ? depth0.following : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"following","hash":{},"data":data}) : helper)))
    + "</h3></a>\n<span>Following</span>\n\n<hr>\n\n<h4>Organizations</h4>\n\n<a href=\"/TIY-GVL-FEE-2015-May\" aria-label=\"TIY-GVL-FEE-2015-May\"><img alt=\"@TIY-GVL-FEE-2015-May\" src=\"https://avatars0.githubusercontent.com/u/11824325?v=3&amp;s=84\"></a>\n\n\n<a href=\"/TechClimber\" aria-label=\"TechClimber\"><img alt=\"@TechClimber\" data-user=\"12204206\" src=\"https://avatars0.githubusercontent.com/u/12204206?v=3&amp;s=84\"></a>\n";
},"useData":true});