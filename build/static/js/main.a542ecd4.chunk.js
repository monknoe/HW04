(this.webpackJsonphw04=this.webpackJsonphw04||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(3),i=n.n(s),c=(n(13),n(4)),o=n(5),h=n(8),u=n(7),b=n(6),l=n.n(b),j=n(0),m=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={username:"",githubtUrl:"",avatarUrl:"",created_at:"",name:"",bio:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;l.a.get(this.props.source,(function(e){console.log(e);var n=e;n&&t.setState({username:n.name,githubtUrl:n.html_url,avatarUrl:n.avatar_url,created_at:n.created_at,name:n.name,bio:n.bio})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:this.state.username}),Object(j.jsx)("img",{src:this.state.avatarUrl}),Object(j.jsx)("a",{href:this.state.githubtUrl,children:"Github Link"}),".",Object(j.jsxs)("p",{children:["start coding from:",this.state.created_at]}),Object(j.jsxs)("p",{children:["my name:",this.state.name]}),Object(j.jsx)("h2",{children:this.state.bio})]})}}]),n}(r.a.Component),d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),s(t),i(t)}))};i.a.render(Object(j.jsx)(m,{source:"https://api.github.com/users/monknoe"}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.a542ecd4.chunk.js.map