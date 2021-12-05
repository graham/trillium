(function() {var implementors = {};
implementors["trillium"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium/struct.Conn.html\" title=\"struct trillium::Conn\">Conn</a>","synthetic":true,"types":["trillium::conn::Conn"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"trillium/struct.State.html\" title=\"struct trillium::State\">State</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium::state::State"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium/struct.Info.html\" title=\"struct trillium::Info\">Info</a>","synthetic":true,"types":["trillium::info::Info"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"trillium/struct.Init.html\" title=\"struct trillium::Init\">Init</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium::init::Init"]}];
implementors["trillium_api"] = [{"text":"impl&lt;F, BodyType&gt; Freeze for <a class=\"struct\" href=\"trillium_api/struct.ApiHandler.html\" title=\"struct trillium_api::ApiHandler\">ApiHandler</a>&lt;F, BodyType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_api::ApiHandler"]}];
implementors["trillium_async_std"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_async_std/struct.ClientConfig.html\" title=\"struct trillium_async_std::ClientConfig\">ClientConfig</a>","synthetic":true,"types":["trillium_async_std::client::ClientConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_async_std/struct.TcpConnector.html\" title=\"struct trillium_async_std::TcpConnector\">TcpConnector</a>","synthetic":true,"types":["trillium_async_std::client::TcpConnector"]}];
implementors["trillium_aws_lambda_example"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"trillium_aws_lambda_example/struct.HelloTemplate.html\" title=\"struct trillium_aws_lambda_example::HelloTemplate\">HelloTemplate</a>&lt;'a&gt;","synthetic":true,"types":["trillium_aws_lambda_example::HelloTemplate"]}];
implementors["trillium_basic_auth"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_basic_auth/struct.BasicAuth.html\" title=\"struct trillium_basic_auth::BasicAuth\">BasicAuth</a>","synthetic":true,"types":["trillium_basic_auth::BasicAuth"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_basic_auth/struct.Credentials.html\" title=\"struct trillium_basic_auth::Credentials\">Credentials</a>","synthetic":true,"types":["trillium_basic_auth::Credentials"]}];
implementors["trillium_caching_headers"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_caching_headers/struct.Etag.html\" title=\"struct trillium_caching_headers::Etag\">Etag</a>","synthetic":true,"types":["trillium_caching_headers::etag::Etag"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_caching_headers/struct.Modified.html\" title=\"struct trillium_caching_headers::Modified\">Modified</a>","synthetic":true,"types":["trillium_caching_headers::modified::Modified"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_caching_headers/enum.CacheControlDirective.html\" title=\"enum trillium_caching_headers::CacheControlDirective\">CacheControlDirective</a>","synthetic":true,"types":["trillium_caching_headers::cache_control::CacheControlDirective"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_caching_headers/struct.CacheControlHeader.html\" title=\"struct trillium_caching_headers::CacheControlHeader\">CacheControlHeader</a>","synthetic":true,"types":["trillium_caching_headers::cache_control::CacheControlHeader"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_caching_headers/struct.CachingHeaders.html\" title=\"struct trillium_caching_headers::CachingHeaders\">CachingHeaders</a>","synthetic":true,"types":["trillium_caching_headers::CachingHeaders"]}];
implementors["trillium_channels"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_channels/struct.ChannelBroadcaster.html\" title=\"struct trillium_channels::ChannelBroadcaster\">ChannelBroadcaster</a>","synthetic":true,"types":["trillium_channels::channel_broadcaster::ChannelBroadcaster"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_channels/struct.ChannelEvent.html\" title=\"struct trillium_channels::ChannelEvent\">ChannelEvent</a>","synthetic":true,"types":["trillium_channels::channel_event::ChannelEvent"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_channels/struct.ChannelClient.html\" title=\"struct trillium_channels::ChannelClient\">ChannelClient</a>","synthetic":true,"types":["trillium_channels::channel_client::ChannelClient"]},{"text":"impl&lt;CH&gt; Freeze for <a class=\"struct\" href=\"trillium_channels/struct.Channel.html\" title=\"struct trillium_channels::Channel\">Channel</a>&lt;CH&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CH: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_channels::channel::Channel"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"trillium_channels/struct.ChannelConn.html\" title=\"struct trillium_channels::ChannelConn\">ChannelConn</a>&lt;'a&gt;","synthetic":true,"types":["trillium_channels::channel_conn::ChannelConn"]}];
implementors["trillium_client"] = [{"text":"impl&lt;'config, C&gt; Freeze for <a class=\"struct\" href=\"trillium_client/struct.Conn.html\" title=\"struct trillium_client::Conn\">Conn</a>&lt;'config, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"trillium_client/trait.Connector.html\" title=\"trait trillium_client::Connector\">Connector</a>&gt;::<a class=\"type\" href=\"trillium_client/trait.Connector.html#associatedtype.Config\" title=\"type trillium_client::Connector::Config\">Config</a>: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"trillium_client/trait.Connector.html\" title=\"trait trillium_client::Connector\">Connector</a>&gt;::<a class=\"type\" href=\"trillium_client/trait.Connector.html#associatedtype.Transport\" title=\"type trillium_client::Connector::Transport\">Transport</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_client::conn::Conn"]},{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"trillium_client/struct.Client.html\" title=\"struct trillium_client::Client\">Client</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"trillium_client/trait.Connector.html\" title=\"trait trillium_client::Connector\">Connector</a>&gt;::<a class=\"type\" href=\"trillium_client/trait.Connector.html#associatedtype.Config\" title=\"type trillium_client::Connector::Config\">Config</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_client::client::Client"]}];
implementors["trillium_compression"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_compression/enum.CompressionAlgorithm.html\" title=\"enum trillium_compression::CompressionAlgorithm\">CompressionAlgorithm</a>","synthetic":true,"types":["trillium_compression::CompressionAlgorithm"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_compression/struct.Compression.html\" title=\"struct trillium_compression::Compression\">Compression</a>","synthetic":true,"types":["trillium_compression::Compression"]}];
implementors["trillium_conn_id"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_conn_id/struct.ConnId.html\" title=\"struct trillium_conn_id::ConnId\">ConnId</a>","synthetic":true,"types":["trillium_conn_id::ConnId"]}];
implementors["trillium_cookies"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_cookies/struct.CookiesHandler.html\" title=\"struct trillium_cookies::CookiesHandler\">CookiesHandler</a>","synthetic":true,"types":["trillium_cookies::cookies_handler::CookiesHandler"]}];
implementors["trillium_example"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Freeze.html\" title=\"trait core::marker::Freeze\">Freeze</a> for <a class=\"struct\" href=\"trillium_example/struct.HelloTemplate.html\" title=\"struct trillium_example::HelloTemplate\">HelloTemplate</a>&lt;'a&gt;","synthetic":true,"types":["trillium_example::HelloTemplate"]}];
implementors["trillium_forwarding"] = [{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"trillium_forwarding/struct.Forwarded.html\" title=\"struct trillium_forwarding::Forwarded\">Forwarded</a>&lt;'a&gt;","synthetic":true,"types":["trillium_forwarding::forwarded::Forwarded"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_forwarding/struct.Forwarding.html\" title=\"struct trillium_forwarding::Forwarding\">Forwarding</a>","synthetic":true,"types":["trillium_forwarding::Forwarding"]}];
implementors["trillium_handlebars"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_handlebars/struct.Assigns.html\" title=\"struct trillium_handlebars::Assigns\">Assigns</a>","synthetic":true,"types":["trillium_handlebars::assigns::Assigns"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_handlebars/struct.HandlebarsHandler.html\" title=\"struct trillium_handlebars::HandlebarsHandler\">HandlebarsHandler</a>","synthetic":true,"types":["trillium_handlebars::handlebars_handler::HandlebarsHandler"]}];
implementors["trillium_head"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_head/struct.Head.html\" title=\"struct trillium_head::Head\">Head</a>","synthetic":true,"types":["trillium_head::Head"]}];
implementors["trillium_http"] = [{"text":"impl&lt;'conn, Transport&gt; Freeze for <a class=\"struct\" href=\"trillium_http/struct.ReceivedBody.html\" title=\"struct trillium_http::ReceivedBody\">ReceivedBody</a>&lt;'conn, Transport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transport: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_http::received_body::ReceivedBody"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_http/enum.ReceivedBodyState.html\" title=\"enum trillium_http::ReceivedBodyState\">ReceivedBodyState</a>","synthetic":true,"types":["trillium_http::received_body::ReceivedBodyState"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_http/enum.Error.html\" title=\"enum trillium_http::Error\">Error</a>","synthetic":true,"types":["trillium_http::error::Error"]},{"text":"impl&lt;Transport&gt; Freeze for <a class=\"struct\" href=\"trillium_http/struct.Conn.html\" title=\"struct trillium_http::Conn\">Conn</a>&lt;Transport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transport: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_http::conn::Conn"]},{"text":"impl&lt;Transport&gt; Freeze for <a class=\"enum\" href=\"trillium_http/enum.ConnectionStatus.html\" title=\"enum trillium_http::ConnectionStatus\">ConnectionStatus</a>&lt;Transport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transport: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_http::connection_status::ConnectionStatus"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_http/struct.Synthetic.html\" title=\"struct trillium_http::Synthetic\">Synthetic</a>","synthetic":true,"types":["trillium_http::synthetic::Synthetic"]},{"text":"impl&lt;Transport&gt; Freeze for <a class=\"struct\" href=\"trillium_http/struct.Upgrade.html\" title=\"struct trillium_http::Upgrade\">Upgrade</a>&lt;Transport&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Transport: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_http::upgrade::Upgrade"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_http/struct.Body.html\" title=\"struct trillium_http::Body\">Body</a>","synthetic":true,"types":["trillium_http::body::Body"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_http/struct.StateSet.html\" title=\"struct trillium_http::StateSet\">StateSet</a>","synthetic":true,"types":["trillium_http::state_set::StateSet"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_http/struct.Headers.html\" title=\"struct trillium_http::Headers\">Headers</a>","synthetic":true,"types":["trillium_http::headers::Headers"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"trillium_http/struct.HeaderName.html\" title=\"struct trillium_http::HeaderName\">HeaderName</a>&lt;'a&gt;","synthetic":true,"types":["trillium_http::header_name::HeaderName"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_http/enum.KnownHeaderName.html\" title=\"enum trillium_http::KnownHeaderName\">KnownHeaderName</a>","synthetic":true,"types":["trillium_http::header_name::KnownHeaderName"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_http/struct.HeaderValues.html\" title=\"struct trillium_http::HeaderValues\">HeaderValues</a>","synthetic":true,"types":["trillium_http::header_values::HeaderValues"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_http/struct.HeaderValue.html\" title=\"struct trillium_http::HeaderValue\">HeaderValue</a>","synthetic":true,"types":["trillium_http::header_value::HeaderValue"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_http/enum.Status.html\" title=\"enum trillium_http::Status\">Status</a>","synthetic":true,"types":["trillium_http::status::Status"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_http/enum.Method.html\" title=\"enum trillium_http::Method\">Method</a>","synthetic":true,"types":["trillium_http::method::Method"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_http/enum.Version.html\" title=\"enum trillium_http::Version\">Version</a>","synthetic":true,"types":["trillium_http::version::Version"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_http/transport/struct.BoxedTransport.html\" title=\"struct trillium_http::transport::BoxedTransport\">BoxedTransport</a>","synthetic":true,"types":["trillium_http::transport::boxed_transport::BoxedTransport"]}];
implementors["trillium_logger"] = [{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_logger/enum.ColorMode.html\" title=\"enum trillium_logger::ColorMode\">ColorMode</a>","synthetic":true,"types":["trillium_logger::ColorMode"]},{"text":"impl Freeze for <a class=\"enum\" href=\"trillium_logger/enum.Target.html\" title=\"enum trillium_logger::Target\">Target</a>","synthetic":true,"types":["trillium_logger::Target"]},{"text":"impl&lt;F&gt; Freeze for <a class=\"struct\" href=\"trillium_logger/struct.Logger.html\" title=\"struct trillium_logger::Logger\">Logger</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_logger::Logger"]}];
implementors["trillium_method_override"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_method_override/struct.MethodOverride.html\" title=\"struct trillium_method_override::MethodOverride\">MethodOverride</a>","synthetic":true,"types":["trillium_method_override::MethodOverride"]}];
implementors["trillium_native_tls"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsAcceptor.html\" title=\"struct trillium_native_tls::NativeTlsAcceptor\">NativeTlsAcceptor</a>","synthetic":true,"types":["trillium_native_tls::server::NativeTlsAcceptor"]},{"text":"impl&lt;Config&gt; Freeze for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsConfig.html\" title=\"struct trillium_native_tls::NativeTlsConfig\">NativeTlsConfig</a>&lt;Config&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Config: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_native_tls::client::NativeTlsConfig"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"trillium_native_tls/struct.NativeTlsConnector.html\" title=\"struct trillium_native_tls::NativeTlsConnector\">NativeTlsConnector</a>&lt;T&gt;","synthetic":true,"types":["trillium_native_tls::client::NativeTlsConnector"]}];
implementors["trillium_proxy"] = [{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"trillium_proxy/struct.Proxy.html\" title=\"struct trillium_proxy::Proxy\">Proxy</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;C as <a class=\"trait\" href=\"trillium_proxy/trait.Connector.html\" title=\"trait trillium_proxy::Connector\">Connector</a>&gt;::<a class=\"type\" href=\"trillium_proxy/trait.Connector.html#associatedtype.Config\" title=\"type trillium_proxy::Connector::Config\">Config</a>: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_proxy::Proxy"]}];
implementors["trillium_router"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_router/struct.Router.html\" title=\"struct trillium_router::Router\">Router</a>","synthetic":true,"types":["trillium_router::router::Router"]},{"text":"impl&lt;'r&gt; Freeze for <a class=\"struct\" href=\"trillium_router/struct.RouterRef.html\" title=\"struct trillium_router::RouterRef\">RouterRef</a>&lt;'r&gt;","synthetic":true,"types":["trillium_router::router_ref::RouterRef"]}];
implementors["trillium_rustls"] = [{"text":"impl&lt;C&gt; Freeze for <a class=\"struct\" href=\"trillium_rustls/struct.RustlsConnector.html\" title=\"struct trillium_rustls::RustlsConnector\">RustlsConnector</a>&lt;C&gt;","synthetic":true,"types":["trillium_rustls::client::RustlsConnector"]},{"text":"impl&lt;Config&gt; Freeze for <a class=\"struct\" href=\"trillium_rustls/struct.RustlsConfig.html\" title=\"struct trillium_rustls::RustlsConfig\">RustlsConfig</a>&lt;Config&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Config: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_rustls::client::RustlsConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_rustls/struct.RustlsAcceptor.html\" title=\"struct trillium_rustls::RustlsAcceptor\">RustlsAcceptor</a>","synthetic":true,"types":["trillium_rustls::server::RustlsAcceptor"]}];
implementors["trillium_server_common"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_server_common/struct.CloneCounter.html\" title=\"struct trillium_server_common::CloneCounter\">CloneCounter</a>","synthetic":true,"types":["trillium_server_common::clone_counter::CloneCounter"]},{"text":"impl&lt;ServerType:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, AcceptorType&gt; Freeze for <a class=\"struct\" href=\"trillium_server_common/struct.Config.html\" title=\"struct trillium_server_common::Config\">Config</a>&lt;ServerType, AcceptorType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AcceptorType: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_server_common::config::Config"]},{"text":"impl&lt;T, U&gt; Freeze for <a class=\"enum\" href=\"trillium_server_common/enum.Binding.html\" title=\"enum trillium_server_common::Binding\">Binding</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_server_common::binding::Binding"]}];
implementors["trillium_sessions"] = [{"text":"impl&lt;Store&gt; Freeze for <a class=\"struct\" href=\"trillium_sessions/struct.SessionHandler.html\" title=\"struct trillium_sessions::SessionHandler\">SessionHandler</a>&lt;Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_sessions::session_handler::SessionHandler"]}];
implementors["trillium_smol"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_smol/struct.ClientConfig.html\" title=\"struct trillium_smol::ClientConfig\">ClientConfig</a>","synthetic":true,"types":["trillium_smol::client::ClientConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_smol/struct.TcpConnector.html\" title=\"struct trillium_smol::TcpConnector\">TcpConnector</a>","synthetic":true,"types":["trillium_smol::client::TcpConnector"]}];
implementors["trillium_sse"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_sse/struct.Event.html\" title=\"struct trillium_sse::Event\">Event</a>","synthetic":true,"types":["trillium_sse::Event"]}];
implementors["trillium_static"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_static/struct.StaticFileHandler.html\" title=\"struct trillium_static::StaticFileHandler\">StaticFileHandler</a>","synthetic":true,"types":["trillium_static::handler::StaticFileHandler"]}];
implementors["trillium_static_compiled"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_static_compiled/struct.StaticCompiledHandler.html\" title=\"struct trillium_static_compiled::StaticCompiledHandler\">StaticCompiledHandler</a>","synthetic":true,"types":["trillium_static_compiled::StaticCompiledHandler"]}];
implementors["trillium_tera"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_tera/struct.TeraHandler.html\" title=\"struct trillium_tera::TeraHandler\">TeraHandler</a>","synthetic":true,"types":["trillium_tera::tera_handler::TeraHandler"]}];
implementors["trillium_testing"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_testing/struct.TestTransport.html\" title=\"struct trillium_testing::TestTransport\">TestTransport</a>","synthetic":true,"types":["trillium_testing::test_transport::TestTransport"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_testing/struct.TestConn.html\" title=\"struct trillium_testing::TestConn\">TestConn</a>","synthetic":true,"types":["trillium_testing::test_conn::TestConn"]}];
implementors["trillium_tokio"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_tokio/struct.ClientConfig.html\" title=\"struct trillium_tokio::ClientConfig\">ClientConfig</a>","synthetic":true,"types":["trillium_tokio::client::ClientConfig"]},{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_tokio/struct.TcpConnector.html\" title=\"struct trillium_tokio::TcpConnector\">TcpConnector</a>","synthetic":true,"types":["trillium_tokio::client::TcpConnector"]}];
implementors["trillium_websockets"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"trillium_websockets/struct.WebSocketConn.html\" title=\"struct trillium_websockets::WebSocketConn\">WebSocketConn</a>","synthetic":true,"types":["trillium_websockets::websocket_connection::WebSocketConn"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"trillium_websockets/struct.JsonHandler.html\" title=\"struct trillium_websockets::JsonHandler\">JsonHandler</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_websockets::json::JsonHandler"]},{"text":"impl&lt;H&gt; Freeze for <a class=\"struct\" href=\"trillium_websockets/struct.WebSocket.html\" title=\"struct trillium_websockets::WebSocket\">WebSocket</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Freeze,&nbsp;</span>","synthetic":true,"types":["trillium_websockets::WebSocket"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()