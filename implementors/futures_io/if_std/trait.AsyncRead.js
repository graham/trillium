(function() {var implementors = {};
implementors["trillium_http"] = [{"text":"impl&lt;'conn, Transport&gt; AsyncRead for <a class=\"struct\" href=\"trillium_http/struct.ReceivedBody.html\" title=\"struct trillium_http::ReceivedBody\">ReceivedBody</a>&lt;'conn, Transport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transport: AsyncRead + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>","synthetic":false,"types":["trillium_http::received_body::ReceivedBody"]},{"text":"impl AsyncRead for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":false,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl&lt;Transport:&nbsp;AsyncRead + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; AsyncRead for <a class=\"struct\" href=\"trillium_http/struct.Upgrade.html\" title=\"struct trillium_http::Upgrade\">Upgrade</a>&lt;Transport&gt;","synthetic":false,"types":["trillium_http::upgrade::Upgrade"]},{"text":"impl AsyncRead for <a class=\"struct\" href=\"trillium_http/struct.Body.html\" title=\"struct trillium_http::Body\">Body</a>","synthetic":false,"types":["trillium_http::body::Body"]},{"text":"impl AsyncRead for <a class=\"struct\" href=\"trillium_http/transport/struct.BoxedTransport.html\" title=\"struct trillium_http::transport::BoxedTransport\">BoxedTransport</a>","synthetic":false,"types":["trillium_http::transport::boxed_transport::BoxedTransport"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()