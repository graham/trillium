(function() {var implementors = {};
implementors["trillium_caching_headers"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"trillium_caching_headers/enum.CacheControlDirective.html\" title=\"enum trillium_caching_headers::CacheControlDirective\">CacheControlDirective</a>&gt; for <a class=\"struct\" href=\"trillium_caching_headers/struct.CacheControlHeader.html\" title=\"struct trillium_caching_headers::CacheControlHeader\">CacheControlHeader</a>","synthetic":false,"types":["trillium_caching_headers::cache_control::CacheControlHeader"]}];
implementors["trillium_http"] = [{"text":"impl&lt;HN, HV&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>HN, HV<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"trillium_http/struct.Headers.html\" title=\"struct trillium_http::Headers\">Headers</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;HN: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"trillium_http/struct.HeaderName.html\" title=\"struct trillium_http::HeaderName\">HeaderName</a>&lt;'static&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;HV: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a>&gt;,&nbsp;</span>","synthetic":false,"types":["trillium_http::headers::Headers"]},{"text":"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;I&gt; for <a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>&gt;,&nbsp;</span>","synthetic":false,"types":["trillium_http::header_values::HeaderValues"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()