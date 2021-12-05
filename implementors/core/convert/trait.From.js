(function() {var implementors = {};
implementors["trillium"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"trillium_http/transport/trait.Transport.html\" title=\"trait trillium_http::transport::Transport\">Transport</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_http/conn/struct.Conn.html\" title=\"struct trillium_http::conn::Conn\">Conn</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"trillium/struct.Conn.html\" title=\"struct trillium::Conn\">Conn</a>","synthetic":false,"types":["trillium::conn::Conn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium/struct.Info.html\" title=\"struct trillium::Info\">Info</a>","synthetic":false,"types":["trillium::info::Info"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt; for <a class=\"struct\" href=\"trillium/struct.Info.html\" title=\"struct trillium::Info\">Info</a>","synthetic":false,"types":["trillium::info::Info"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/os/unix/net/addr/struct.SocketAddr.html\" title=\"struct std::os::unix::net::addr::SocketAddr\">SocketAddr</a>&gt; for <a class=\"struct\" href=\"trillium/struct.Info.html\" title=\"struct trillium::Info\">Info</a>","synthetic":false,"types":["trillium::info::Info"]}];
implementors["trillium_caching_headers"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"trillium_caching_headers/struct.CacheControlHeader.html\" title=\"struct trillium_caching_headers::CacheControlHeader\">CacheControlHeader</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"trillium_caching_headers/enum.CacheControlDirective.html\" title=\"enum trillium_caching_headers::CacheControlDirective\">CacheControlDirective</a>&gt;,&nbsp;</span>","synthetic":false,"types":["trillium_caching_headers::cache_control::CacheControlHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"trillium_caching_headers/enum.CacheControlDirective.html\" title=\"enum trillium_caching_headers::CacheControlDirective\">CacheControlDirective</a>&gt; for <a class=\"struct\" href=\"trillium_caching_headers/struct.CacheControlHeader.html\" title=\"struct trillium_caching_headers::CacheControlHeader\">CacheControlHeader</a>","synthetic":false,"types":["trillium_caching_headers::cache_control::CacheControlHeader"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"trillium_caching_headers/enum.CacheControlDirective.html\" title=\"enum trillium_caching_headers::CacheControlDirective\">CacheControlDirective</a>&gt; for <a class=\"struct\" href=\"trillium_http/header_values/struct.HeaderValues.html\" title=\"struct trillium_http::header_values::HeaderValues\">HeaderValues</a>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_caching_headers/struct.CacheControlHeader.html\" title=\"struct trillium_caching_headers::CacheControlHeader\">CacheControlHeader</a>&gt; for <a class=\"struct\" href=\"trillium_http/header_values/struct.HeaderValues.html\" title=\"struct trillium_http::header_values::HeaderValues\">HeaderValues</a>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]}];
implementors["trillium_channels"] = [{"text":"impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, E<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"trillium_channels/struct.ChannelEvent.html\" title=\"struct trillium_channels::ChannelEvent\">ChannelEvent</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["trillium_channels::channel_event::ChannelEvent"]},{"text":"impl&lt;T, E, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, E, P<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"trillium_channels/struct.ChannelEvent.html\" title=\"struct trillium_channels::ChannelEvent\">ChannelEvent</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.130/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["trillium_channels::channel_event::ChannelEvent"]}];
implementors["trillium_client"] = [{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"trillium_client/trait.Connector.html\" title=\"trait trillium_client::Connector\">Connector</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_client/struct.Conn.html\" title=\"struct trillium_client::Conn\">Conn</a>&lt;'_, C&gt;&gt; for <a class=\"struct\" href=\"trillium_http/body/struct.Body.html\" title=\"struct trillium_http::body::Body\">Body</a>","synthetic":false,"types":["trillium_http::body::Body"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"trillium_client/trait.Connector.html\" title=\"trait trillium_client::Connector\">Connector</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_client/struct.Conn.html\" title=\"struct trillium_client::Conn\">Conn</a>&lt;'_, C&gt;&gt; for <a class=\"struct\" href=\"trillium_http/received_body/struct.ReceivedBody.html\" title=\"struct trillium_http::received_body::ReceivedBody\">ReceivedBody</a>&lt;'static, C::<a class=\"type\" href=\"trillium_client/trait.Connector.html#associatedtype.Transport\" title=\"type trillium_client::Connector::Transport\">Transport</a>&gt;","synthetic":false,"types":["trillium_http::received_body::ReceivedBody"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"trillium_client/trait.Connector.html\" title=\"trait trillium_client::Connector\">Connector</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_client/struct.Conn.html\" title=\"struct trillium_client::Conn\">Conn</a>&lt;'_, C&gt;&gt; for <a class=\"struct\" href=\"trillium_http/upgrade/struct.Upgrade.html\" title=\"struct trillium_http::upgrade::Upgrade\">Upgrade</a>&lt;C::<a class=\"type\" href=\"trillium_client/trait.Connector.html#associatedtype.Transport\" title=\"type trillium_client::Connector::Transport\">Transport</a>&gt;","synthetic":false,"types":["trillium_http::upgrade::Upgrade"]}];
implementors["trillium_handlebars"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_handlebars/struct.HandlebarsHandler.html\" title=\"struct trillium_handlebars::HandlebarsHandler\">HandlebarsHandler</a>","synthetic":false,"types":["trillium_handlebars::handlebars_handler::HandlebarsHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_handlebars/struct.Handlebars.html\" title=\"struct trillium_handlebars::Handlebars\">Registry</a>&lt;'static&gt;&gt; for <a class=\"struct\" href=\"trillium_handlebars/struct.HandlebarsHandler.html\" title=\"struct trillium_handlebars::HandlebarsHandler\">HandlebarsHandler</a>","synthetic":false,"types":["trillium_handlebars::handlebars_handler::HandlebarsHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"trillium_handlebars/struct.HandlebarsHandler.html\" title=\"struct trillium_handlebars::HandlebarsHandler\">HandlebarsHandler</a>","synthetic":false,"types":["trillium_handlebars::handlebars_handler::HandlebarsHandler"]}];
implementors["trillium_http"] = [{"text":"impl&lt;Transport&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_http/struct.ReceivedBody.html\" title=\"struct trillium_http::ReceivedBody\">ReceivedBody</a>&lt;'static, Transport&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.Body.html\" title=\"struct trillium_http::Body\">Body</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transport: AsyncRead + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,&nbsp;</span>","synthetic":false,"types":["trillium_http::body::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"trillium_http/enum.Error.html\" title=\"enum trillium_http::Error\">Error</a>","synthetic":false,"types":["trillium_http::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"trillium_http/enum.Error.html\" title=\"enum trillium_http::Error\">Error</a>","synthetic":false,"types":["trillium_http::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a>&gt; for <a class=\"enum\" href=\"trillium_http/enum.Error.html\" title=\"enum trillium_http::Error\">Error</a>","synthetic":false,"types":["trillium_http::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/str/error/struct.Utf8Error.html\" title=\"struct core::str::error::Utf8Error\">Utf8Error</a>&gt; for <a class=\"enum\" href=\"trillium_http/enum.Error.html\" title=\"enum trillium_http::Error\">Error</a>","synthetic":false,"types":["trillium_http::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":false,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'_ [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":false,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":false,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":false,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":false,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":false,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl&lt;Transport&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_http/struct.Conn.html\" title=\"struct trillium_http::Conn\">Conn</a>&lt;Transport&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.Upgrade.html\" title=\"struct trillium_http::Upgrade\">Upgrade</a>&lt;Transport&gt;","synthetic":false,"types":["trillium_http::upgrade::Upgrade"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Body.html\" title=\"struct trillium_http::Body\">Body</a>","synthetic":false,"types":["trillium_http::body::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Body.html\" title=\"struct trillium_http::Body\">Body</a>","synthetic":false,"types":["trillium_http::body::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'static [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Body.html\" title=\"struct trillium_http::Body\">Body</a>","synthetic":false,"types":["trillium_http::body::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.Body.html\" title=\"struct trillium_http::Body\">Body</a>","synthetic":false,"types":["trillium_http::body::Body"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderName.html\" title=\"struct trillium_http::HeaderName\">HeaderName</a>&lt;'static&gt;","synthetic":false,"types":["trillium_http::header_name::HeaderName"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderName.html\" title=\"struct trillium_http::HeaderName\">HeaderName</a>&lt;'a&gt;","synthetic":false,"types":["trillium_http::header_name::HeaderName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"trillium_http/enum.KnownHeaderName.html\" title=\"enum trillium_http::KnownHeaderName\">KnownHeaderName</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderName.html\" title=\"struct trillium_http::HeaderName\">HeaderName</a>&lt;'_&gt;","synthetic":false,"types":["trillium_http::header_name::HeaderName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]},{"text":"impl&lt;HV&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;HV, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;HV: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>&gt;,&nbsp;</span>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["trillium_http::header_value::HeaderValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'static [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["trillium_http::header_value::HeaderValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["trillium_http::header_value::HeaderValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["trillium_http::header_value::HeaderValue"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"trillium_http/enum.Status.html\" title=\"enum trillium_http::Status\">Status</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a>","synthetic":false,"types":[]}];
implementors["trillium_native_tls"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_native_tls/struct.Identity.html\" title=\"struct trillium_native_tls::Identity\">Identity</a>&gt; for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsAcceptor.html\" title=\"struct trillium_native_tls::NativeTlsAcceptor\">NativeTlsAcceptor</a>","synthetic":false,"types":["trillium_native_tls::server::NativeTlsAcceptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/native-tls/0.2/native_tls/struct.TlsAcceptor.html\" title=\"struct native_tls::TlsAcceptor\">TlsAcceptor</a>&gt; for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsAcceptor.html\" title=\"struct trillium_native_tls::NativeTlsAcceptor\">NativeTlsAcceptor</a>","synthetic":false,"types":["trillium_native_tls::server::NativeTlsAcceptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;TlsAcceptor&gt; for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsAcceptor.html\" title=\"struct trillium_native_tls::NativeTlsAcceptor\">NativeTlsAcceptor</a>","synthetic":false,"types":["trillium_native_tls::server::NativeTlsAcceptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'_ [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>, &amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsAcceptor.html\" title=\"struct trillium_native_tls::NativeTlsAcceptor\">NativeTlsAcceptor</a>","synthetic":false,"types":["trillium_native_tls::server::NativeTlsAcceptor"]}];
implementors["trillium_rustls"] = [{"text":"impl&lt;Config:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ClientConfig&gt; for <a class=\"struct\" href=\"trillium_rustls/struct.RustlsConfig.html\" title=\"struct trillium_rustls::RustlsConfig\">RustlsConfig</a>&lt;Config&gt;","synthetic":false,"types":["trillium_rustls::client::RustlsConfig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ServerConfig&gt; for <a class=\"struct\" href=\"trillium_rustls/struct.RustlsAcceptor.html\" title=\"struct trillium_rustls::RustlsAcceptor\">RustlsAcceptor</a>","synthetic":false,"types":["trillium_rustls::server::RustlsAcceptor"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;TlsAcceptor&gt; for <a class=\"struct\" href=\"trillium_rustls/struct.RustlsAcceptor.html\" title=\"struct trillium_rustls::RustlsAcceptor\">RustlsAcceptor</a>","synthetic":false,"types":["trillium_rustls::server::RustlsAcceptor"]}];
implementors["trillium_sse"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_sse/struct.Event.html\" title=\"struct trillium_sse::Event\">Event</a>","synthetic":false,"types":["trillium_sse::Event"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_sse/struct.Event.html\" title=\"struct trillium_sse::Event\">Event</a>","synthetic":false,"types":["trillium_sse::Event"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"trillium_sse/struct.Event.html\" title=\"struct trillium_sse::Event\">Event</a>","synthetic":false,"types":["trillium_sse::Event"]}];
implementors["trillium_tera"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"trillium_tera/struct.TeraHandler.html\" title=\"struct trillium_tera::TeraHandler\">TeraHandler</a>","synthetic":false,"types":["trillium_tera::tera_handler::TeraHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"trillium_tera/struct.TeraHandler.html\" title=\"struct trillium_tera::TeraHandler\">TeraHandler</a>","synthetic":false,"types":["trillium_tera::tera_handler::TeraHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_tera/struct.TeraHandler.html\" title=\"struct trillium_tera::TeraHandler\">TeraHandler</a>","synthetic":false,"types":["trillium_tera::tera_handler::TeraHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"trillium_tera/struct.TeraHandler.html\" title=\"struct trillium_tera::TeraHandler\">TeraHandler</a>","synthetic":false,"types":["trillium_tera::tera_handler::TeraHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_tera/struct.Tera.html\" title=\"struct trillium_tera::Tera\">Tera</a>&gt; for <a class=\"struct\" href=\"trillium_tera/struct.TeraHandler.html\" title=\"struct trillium_tera::TeraHandler\">TeraHandler</a>","synthetic":false,"types":["trillium_tera::tera_handler::TeraHandler"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'_ [</a>&amp;'_ <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"trillium_tera/struct.TeraHandler.html\" title=\"struct trillium_tera::TeraHandler\">TeraHandler</a>","synthetic":false,"types":["trillium_tera::tera_handler::TeraHandler"]}];
implementors["trillium_testing"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_testing/struct.TestConn.html\" title=\"struct trillium_testing::TestConn\">TestConn</a>&gt; for <a class=\"struct\" href=\"trillium_testing/prelude/struct.Conn.html\" title=\"struct trillium_testing::prelude::Conn\">Conn</a>","synthetic":false,"types":["trillium::conn::Conn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"trillium_testing/struct.TestConn.html\" title=\"struct trillium_testing::TestConn\">TestConn</a>&gt; for <a class=\"struct\" href=\"trillium_http/conn/struct.Conn.html\" title=\"struct trillium_http::conn::Conn\">HttpConn</a>&lt;<a class=\"struct\" href=\"trillium_http/synthetic/struct.Synthetic.html\" title=\"struct trillium_http::synthetic::Synthetic\">Synthetic</a>&gt;","synthetic":false,"types":["trillium_http::conn::Conn"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()