// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10407 = (function (f,fn_handler,meta10408){
this.f = f;
this.fn_handler = fn_handler;
this.meta10408 = meta10408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10407.cljs$lang$type = true;
cljs.core.async.t10407.cljs$lang$ctorStr = "cljs.core.async/t10407";
cljs.core.async.t10407.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10407");
});
cljs.core.async.t10407.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10409){var self__ = this;
var _10409__$1 = this;return self__.meta10408;
});
cljs.core.async.t10407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10409,meta10408__$1){var self__ = this;
var _10409__$1 = this;return (new cljs.core.async.t10407(self__.f,self__.fn_handler,meta10408__$1));
});
cljs.core.async.__GT_t10407 = (function __GT_t10407(f__$1,fn_handler__$1,meta10408){return (new cljs.core.async.t10407(f__$1,fn_handler__$1,meta10408));
});
}
return (new cljs.core.async.t10407(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10411 = buff;if(G__10411)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__10411.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10411.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10411);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10411);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10412 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10412);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10412);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3396__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4250__auto___10413 = n;var x_10414 = 0;while(true){
if((x_10414 < n__4250__auto___10413))
{(a[x_10414] = 0);
{
var G__10415 = (x_10414 + 1);
x_10414 = G__10415;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10416 = (i + 1);
i = G__10416;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10420 = (function (flag,alt_flag,meta10421){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10421 = meta10421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10420.cljs$lang$type = true;
cljs.core.async.t10420.cljs$lang$ctorStr = "cljs.core.async/t10420";
cljs.core.async.t10420.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10420");
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10422){var self__ = this;
var _10422__$1 = this;return self__.meta10421;
});
cljs.core.async.t10420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10422,meta10421__$1){var self__ = this;
var _10422__$1 = this;return (new cljs.core.async.t10420(self__.flag,self__.alt_flag,meta10421__$1));
});
cljs.core.async.__GT_t10420 = (function __GT_t10420(flag__$1,alt_flag__$1,meta10421){return (new cljs.core.async.t10420(flag__$1,alt_flag__$1,meta10421));
});
}
return (new cljs.core.async.t10420(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10426 = (function (cb,flag,alt_handler,meta10427){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10427 = meta10427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10426.cljs$lang$type = true;
cljs.core.async.t10426.cljs$lang$ctorStr = "cljs.core.async/t10426";
cljs.core.async.t10426.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10426");
});
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10428){var self__ = this;
var _10428__$1 = this;return self__.meta10427;
});
cljs.core.async.t10426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10428,meta10427__$1){var self__ = this;
var _10428__$1 = this;return (new cljs.core.async.t10426(self__.cb,self__.flag,self__.alt_handler,meta10427__$1));
});
cljs.core.async.__GT_t10426 = (function __GT_t10426(cb__$1,flag__$1,alt_handler__$1,meta10427){return (new cljs.core.async.t10426(cb__$1,flag__$1,alt_handler__$1,meta10427));
});
}
return (new cljs.core.async.t10426(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10429_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10429_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3408__auto__ = wport;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10430 = (i + 1);
i = G__10430;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3408__auto__ = ret;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3396__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3396__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3396__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10431){var map__10433 = p__10431;var map__10433__$1 = ((cljs.core.seq_QMARK_.call(null,map__10433))?cljs.core.apply.call(null,cljs.core.hash_map,map__10433):map__10433);var opts = map__10433__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10431 = null;if (arguments.length > 1) {
  p__10431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10431);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10434){
var ports = cljs.core.first(arglist__10434);
var p__10431 = cljs.core.rest(arglist__10434);
return alts_BANG___delegate(ports,p__10431);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10442 = (function (ch,f,map_LT_,meta10443){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10443 = meta10443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10442.cljs$lang$type = true;
cljs.core.async.t10442.cljs$lang$ctorStr = "cljs.core.async/t10442";
cljs.core.async.t10442.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10442");
});
cljs.core.async.t10442.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10442.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10442.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10442.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10445 = (function (fn1,_,meta10443,ch,f,map_LT_,meta10446){
this.fn1 = fn1;
this._ = _;
this.meta10443 = meta10443;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10446 = meta10446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10445.cljs$lang$type = true;
cljs.core.async.t10445.cljs$lang$ctorStr = "cljs.core.async/t10445";
cljs.core.async.t10445.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10445");
});
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10445.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10435_SHARP_){return f1.call(null,(((p1__10435_SHARP_ == null))?null:self__.f.call(null,p1__10435_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10447){var self__ = this;
var _10447__$1 = this;return self__.meta10446;
});
cljs.core.async.t10445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10447,meta10446__$1){var self__ = this;
var _10447__$1 = this;return (new cljs.core.async.t10445(self__.fn1,self__._,self__.meta10443,self__.ch,self__.f,self__.map_LT_,meta10446__$1));
});
cljs.core.async.__GT_t10445 = (function __GT_t10445(fn1__$1,___$2,meta10443__$1,ch__$2,f__$2,map_LT___$2,meta10446){return (new cljs.core.async.t10445(fn1__$1,___$2,meta10443__$1,ch__$2,f__$2,map_LT___$2,meta10446));
});
}
return (new cljs.core.async.t10445(fn1,___$1,self__.meta10443,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3396__auto__ = ret;if(cljs.core.truth_(and__3396__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3396__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10442.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10442.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10444){var self__ = this;
var _10444__$1 = this;return self__.meta10443;
});
cljs.core.async.t10442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10444,meta10443__$1){var self__ = this;
var _10444__$1 = this;return (new cljs.core.async.t10442(self__.ch,self__.f,self__.map_LT_,meta10443__$1));
});
cljs.core.async.__GT_t10442 = (function __GT_t10442(ch__$1,f__$1,map_LT___$1,meta10443){return (new cljs.core.async.t10442(ch__$1,f__$1,map_LT___$1,meta10443));
});
}
return (new cljs.core.async.t10442(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10451 = (function (ch,f,map_GT_,meta10452){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10452 = meta10452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10451.cljs$lang$type = true;
cljs.core.async.t10451.cljs$lang$ctorStr = "cljs.core.async/t10451";
cljs.core.async.t10451.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10451");
});
cljs.core.async.t10451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10451.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10453){var self__ = this;
var _10453__$1 = this;return self__.meta10452;
});
cljs.core.async.t10451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10453,meta10452__$1){var self__ = this;
var _10453__$1 = this;return (new cljs.core.async.t10451(self__.ch,self__.f,self__.map_GT_,meta10452__$1));
});
cljs.core.async.__GT_t10451 = (function __GT_t10451(ch__$1,f__$1,map_GT___$1,meta10452){return (new cljs.core.async.t10451(ch__$1,f__$1,map_GT___$1,meta10452));
});
}
return (new cljs.core.async.t10451(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10457 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10457 = (function (ch,p,filter_GT_,meta10458){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10458 = meta10458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10457.cljs$lang$type = true;
cljs.core.async.t10457.cljs$lang$ctorStr = "cljs.core.async/t10457";
cljs.core.async.t10457.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t10457");
});
cljs.core.async.t10457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10457.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10459){var self__ = this;
var _10459__$1 = this;return self__.meta10458;
});
cljs.core.async.t10457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10459,meta10458__$1){var self__ = this;
var _10459__$1 = this;return (new cljs.core.async.t10457(self__.ch,self__.p,self__.filter_GT_,meta10458__$1));
});
cljs.core.async.__GT_t10457 = (function __GT_t10457(ch__$1,p__$1,filter_GT___$1,meta10458){return (new cljs.core.async.t10457(ch__$1,p__$1,filter_GT___$1,meta10458));
});
}
return (new cljs.core.async.t10457(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___10542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10521){var state_val_10522 = (state_10521[1]);if((state_val_10522 === 1))
{var state_10521__$1 = state_10521;var statearr_10523_10543 = state_10521__$1;(statearr_10523_10543[2] = null);
(statearr_10523_10543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10522 === 2))
{var state_10521__$1 = state_10521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10521__$1,4,ch);
} else
{if((state_val_10522 === 3))
{var inst_10519 = (state_10521[2]);var state_10521__$1 = state_10521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10521__$1,inst_10519);
} else
{if((state_val_10522 === 4))
{var inst_10503 = (state_10521[7]);var inst_10503__$1 = (state_10521[2]);var inst_10504 = (inst_10503__$1 == null);var state_10521__$1 = (function (){var statearr_10524 = state_10521;(statearr_10524[7] = inst_10503__$1);
return statearr_10524;
})();if(cljs.core.truth_(inst_10504))
{var statearr_10525_10544 = state_10521__$1;(statearr_10525_10544[1] = 5);
} else
{var statearr_10526_10545 = state_10521__$1;(statearr_10526_10545[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10522 === 5))
{var inst_10506 = cljs.core.async.close_BANG_.call(null,out);var state_10521__$1 = state_10521;var statearr_10527_10546 = state_10521__$1;(statearr_10527_10546[2] = inst_10506);
(statearr_10527_10546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10522 === 6))
{var inst_10503 = (state_10521[7]);var inst_10508 = p.call(null,inst_10503);var state_10521__$1 = state_10521;if(cljs.core.truth_(inst_10508))
{var statearr_10528_10547 = state_10521__$1;(statearr_10528_10547[1] = 8);
} else
{var statearr_10529_10548 = state_10521__$1;(statearr_10529_10548[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10522 === 7))
{var inst_10517 = (state_10521[2]);var state_10521__$1 = state_10521;var statearr_10530_10549 = state_10521__$1;(statearr_10530_10549[2] = inst_10517);
(statearr_10530_10549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10522 === 8))
{var inst_10503 = (state_10521[7]);var state_10521__$1 = state_10521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10521__$1,11,out,inst_10503);
} else
{if((state_val_10522 === 9))
{var state_10521__$1 = state_10521;var statearr_10531_10550 = state_10521__$1;(statearr_10531_10550[2] = null);
(statearr_10531_10550[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10522 === 10))
{var inst_10514 = (state_10521[2]);var state_10521__$1 = (function (){var statearr_10532 = state_10521;(statearr_10532[8] = inst_10514);
return statearr_10532;
})();var statearr_10533_10551 = state_10521__$1;(statearr_10533_10551[2] = null);
(statearr_10533_10551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10522 === 11))
{var inst_10511 = (state_10521[2]);var state_10521__$1 = state_10521;var statearr_10534_10552 = state_10521__$1;(statearr_10534_10552[2] = inst_10511);
(statearr_10534_10552[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10538 = [null,null,null,null,null,null,null,null,null];(statearr_10538[0] = state_machine__6161__auto__);
(statearr_10538[1] = 1);
return statearr_10538;
});
var state_machine__6161__auto____1 = (function (state_10521){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10521);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10539){if((e10539 instanceof Object))
{var ex__6164__auto__ = e10539;var statearr_10540_10553 = state_10521;(statearr_10540_10553[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10554 = state_10521;
state_10521 = G__10554;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10521){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10541 = f__6176__auto__.call(null);(statearr_10541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10542);
return statearr_10541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10706){var state_val_10707 = (state_10706[1]);if((state_val_10707 === 1))
{var state_10706__$1 = state_10706;var statearr_10708_10745 = state_10706__$1;(statearr_10708_10745[2] = null);
(statearr_10708_10745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 2))
{var state_10706__$1 = state_10706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10706__$1,4,in$);
} else
{if((state_val_10707 === 3))
{var inst_10704 = (state_10706[2]);var state_10706__$1 = state_10706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10706__$1,inst_10704);
} else
{if((state_val_10707 === 4))
{var inst_10652 = (state_10706[7]);var inst_10652__$1 = (state_10706[2]);var inst_10653 = (inst_10652__$1 == null);var state_10706__$1 = (function (){var statearr_10709 = state_10706;(statearr_10709[7] = inst_10652__$1);
return statearr_10709;
})();if(cljs.core.truth_(inst_10653))
{var statearr_10710_10746 = state_10706__$1;(statearr_10710_10746[1] = 5);
} else
{var statearr_10711_10747 = state_10706__$1;(statearr_10711_10747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 5))
{var inst_10655 = cljs.core.async.close_BANG_.call(null,out);var state_10706__$1 = state_10706;var statearr_10712_10748 = state_10706__$1;(statearr_10712_10748[2] = inst_10655);
(statearr_10712_10748[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 6))
{var inst_10652 = (state_10706[7]);var inst_10657 = f.call(null,inst_10652);var inst_10662 = cljs.core.seq.call(null,inst_10657);var inst_10663 = inst_10662;var inst_10664 = null;var inst_10665 = 0;var inst_10666 = 0;var state_10706__$1 = (function (){var statearr_10713 = state_10706;(statearr_10713[8] = inst_10664);
(statearr_10713[9] = inst_10665);
(statearr_10713[10] = inst_10666);
(statearr_10713[11] = inst_10663);
return statearr_10713;
})();var statearr_10714_10749 = state_10706__$1;(statearr_10714_10749[2] = null);
(statearr_10714_10749[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 7))
{var inst_10702 = (state_10706[2]);var state_10706__$1 = state_10706;var statearr_10715_10750 = state_10706__$1;(statearr_10715_10750[2] = inst_10702);
(statearr_10715_10750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 8))
{var inst_10665 = (state_10706[9]);var inst_10666 = (state_10706[10]);var inst_10668 = (inst_10666 < inst_10665);var inst_10669 = inst_10668;var state_10706__$1 = state_10706;if(cljs.core.truth_(inst_10669))
{var statearr_10716_10751 = state_10706__$1;(statearr_10716_10751[1] = 10);
} else
{var statearr_10717_10752 = state_10706__$1;(statearr_10717_10752[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 9))
{var inst_10699 = (state_10706[2]);var state_10706__$1 = (function (){var statearr_10718 = state_10706;(statearr_10718[12] = inst_10699);
return statearr_10718;
})();var statearr_10719_10753 = state_10706__$1;(statearr_10719_10753[2] = null);
(statearr_10719_10753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 10))
{var inst_10664 = (state_10706[8]);var inst_10666 = (state_10706[10]);var inst_10671 = cljs.core._nth.call(null,inst_10664,inst_10666);var state_10706__$1 = state_10706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10706__$1,13,out,inst_10671);
} else
{if((state_val_10707 === 11))
{var inst_10677 = (state_10706[13]);var inst_10663 = (state_10706[11]);var inst_10677__$1 = cljs.core.seq.call(null,inst_10663);var state_10706__$1 = (function (){var statearr_10723 = state_10706;(statearr_10723[13] = inst_10677__$1);
return statearr_10723;
})();if(inst_10677__$1)
{var statearr_10724_10754 = state_10706__$1;(statearr_10724_10754[1] = 14);
} else
{var statearr_10725_10755 = state_10706__$1;(statearr_10725_10755[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 12))
{var inst_10697 = (state_10706[2]);var state_10706__$1 = state_10706;var statearr_10726_10756 = state_10706__$1;(statearr_10726_10756[2] = inst_10697);
(statearr_10726_10756[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 13))
{var inst_10664 = (state_10706[8]);var inst_10665 = (state_10706[9]);var inst_10666 = (state_10706[10]);var inst_10663 = (state_10706[11]);var inst_10673 = (state_10706[2]);var inst_10674 = (inst_10666 + 1);var tmp10720 = inst_10664;var tmp10721 = inst_10665;var tmp10722 = inst_10663;var inst_10663__$1 = tmp10722;var inst_10664__$1 = tmp10720;var inst_10665__$1 = tmp10721;var inst_10666__$1 = inst_10674;var state_10706__$1 = (function (){var statearr_10727 = state_10706;(statearr_10727[8] = inst_10664__$1);
(statearr_10727[9] = inst_10665__$1);
(statearr_10727[14] = inst_10673);
(statearr_10727[10] = inst_10666__$1);
(statearr_10727[11] = inst_10663__$1);
return statearr_10727;
})();var statearr_10728_10757 = state_10706__$1;(statearr_10728_10757[2] = null);
(statearr_10728_10757[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 14))
{var inst_10677 = (state_10706[13]);var inst_10679 = cljs.core.chunked_seq_QMARK_.call(null,inst_10677);var state_10706__$1 = state_10706;if(inst_10679)
{var statearr_10729_10758 = state_10706__$1;(statearr_10729_10758[1] = 17);
} else
{var statearr_10730_10759 = state_10706__$1;(statearr_10730_10759[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 15))
{var state_10706__$1 = state_10706;var statearr_10731_10760 = state_10706__$1;(statearr_10731_10760[2] = null);
(statearr_10731_10760[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 16))
{var inst_10695 = (state_10706[2]);var state_10706__$1 = state_10706;var statearr_10732_10761 = state_10706__$1;(statearr_10732_10761[2] = inst_10695);
(statearr_10732_10761[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 17))
{var inst_10677 = (state_10706[13]);var inst_10681 = cljs.core.chunk_first.call(null,inst_10677);var inst_10682 = cljs.core.chunk_rest.call(null,inst_10677);var inst_10683 = cljs.core.count.call(null,inst_10681);var inst_10663 = inst_10682;var inst_10664 = inst_10681;var inst_10665 = inst_10683;var inst_10666 = 0;var state_10706__$1 = (function (){var statearr_10733 = state_10706;(statearr_10733[8] = inst_10664);
(statearr_10733[9] = inst_10665);
(statearr_10733[10] = inst_10666);
(statearr_10733[11] = inst_10663);
return statearr_10733;
})();var statearr_10734_10762 = state_10706__$1;(statearr_10734_10762[2] = null);
(statearr_10734_10762[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 18))
{var inst_10677 = (state_10706[13]);var inst_10686 = cljs.core.first.call(null,inst_10677);var state_10706__$1 = state_10706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10706__$1,20,out,inst_10686);
} else
{if((state_val_10707 === 19))
{var inst_10692 = (state_10706[2]);var state_10706__$1 = state_10706;var statearr_10735_10763 = state_10706__$1;(statearr_10735_10763[2] = inst_10692);
(statearr_10735_10763[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10707 === 20))
{var inst_10677 = (state_10706[13]);var inst_10688 = (state_10706[2]);var inst_10689 = cljs.core.next.call(null,inst_10677);var inst_10663 = inst_10689;var inst_10664 = null;var inst_10665 = 0;var inst_10666 = 0;var state_10706__$1 = (function (){var statearr_10736 = state_10706;(statearr_10736[15] = inst_10688);
(statearr_10736[8] = inst_10664);
(statearr_10736[9] = inst_10665);
(statearr_10736[10] = inst_10666);
(statearr_10736[11] = inst_10663);
return statearr_10736;
})();var statearr_10737_10764 = state_10706__$1;(statearr_10737_10764[2] = null);
(statearr_10737_10764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10741[0] = state_machine__6161__auto__);
(statearr_10741[1] = 1);
return statearr_10741;
});
var state_machine__6161__auto____1 = (function (state_10706){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10706);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10742){if((e10742 instanceof Object))
{var ex__6164__auto__ = e10742;var statearr_10743_10765 = state_10706;(statearr_10743_10765[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10742;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10766 = state_10706;
state_10706 = G__10766;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10706){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10744 = f__6176__auto__.call(null);(statearr_10744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_10744;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6175__auto___10847 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10826){var state_val_10827 = (state_10826[1]);if((state_val_10827 === 1))
{var state_10826__$1 = state_10826;var statearr_10828_10848 = state_10826__$1;(statearr_10828_10848[2] = null);
(statearr_10828_10848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 2))
{var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10826__$1,4,from);
} else
{if((state_val_10827 === 3))
{var inst_10824 = (state_10826[2]);var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10826__$1,inst_10824);
} else
{if((state_val_10827 === 4))
{var inst_10809 = (state_10826[7]);var inst_10809__$1 = (state_10826[2]);var inst_10810 = (inst_10809__$1 == null);var state_10826__$1 = (function (){var statearr_10829 = state_10826;(statearr_10829[7] = inst_10809__$1);
return statearr_10829;
})();if(cljs.core.truth_(inst_10810))
{var statearr_10830_10849 = state_10826__$1;(statearr_10830_10849[1] = 5);
} else
{var statearr_10831_10850 = state_10826__$1;(statearr_10831_10850[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 5))
{var state_10826__$1 = state_10826;if(cljs.core.truth_(close_QMARK_))
{var statearr_10832_10851 = state_10826__$1;(statearr_10832_10851[1] = 8);
} else
{var statearr_10833_10852 = state_10826__$1;(statearr_10833_10852[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 6))
{var inst_10809 = (state_10826[7]);var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10826__$1,11,to,inst_10809);
} else
{if((state_val_10827 === 7))
{var inst_10822 = (state_10826[2]);var state_10826__$1 = state_10826;var statearr_10834_10853 = state_10826__$1;(statearr_10834_10853[2] = inst_10822);
(statearr_10834_10853[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 8))
{var inst_10813 = cljs.core.async.close_BANG_.call(null,to);var state_10826__$1 = state_10826;var statearr_10835_10854 = state_10826__$1;(statearr_10835_10854[2] = inst_10813);
(statearr_10835_10854[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 9))
{var state_10826__$1 = state_10826;var statearr_10836_10855 = state_10826__$1;(statearr_10836_10855[2] = null);
(statearr_10836_10855[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 10))
{var inst_10816 = (state_10826[2]);var state_10826__$1 = state_10826;var statearr_10837_10856 = state_10826__$1;(statearr_10837_10856[2] = inst_10816);
(statearr_10837_10856[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10827 === 11))
{var inst_10819 = (state_10826[2]);var state_10826__$1 = (function (){var statearr_10838 = state_10826;(statearr_10838[8] = inst_10819);
return statearr_10838;
})();var statearr_10839_10857 = state_10826__$1;(statearr_10839_10857[2] = null);
(statearr_10839_10857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10843 = [null,null,null,null,null,null,null,null,null];(statearr_10843[0] = state_machine__6161__auto__);
(statearr_10843[1] = 1);
return statearr_10843;
});
var state_machine__6161__auto____1 = (function (state_10826){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10844){if((e10844 instanceof Object))
{var ex__6164__auto__ = e10844;var statearr_10845_10858 = state_10826;(statearr_10845_10858[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10826);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10859 = state_10826;
state_10826 = G__10859;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10826){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10846 = f__6176__auto__.call(null);(statearr_10846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10847);
return statearr_10846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6175__auto___10946 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_10924){var state_val_10925 = (state_10924[1]);if((state_val_10925 === 1))
{var state_10924__$1 = state_10924;var statearr_10926_10947 = state_10924__$1;(statearr_10926_10947[2] = null);
(statearr_10926_10947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 2))
{var state_10924__$1 = state_10924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10924__$1,4,ch);
} else
{if((state_val_10925 === 3))
{var inst_10922 = (state_10924[2]);var state_10924__$1 = state_10924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10924__$1,inst_10922);
} else
{if((state_val_10925 === 4))
{var inst_10905 = (state_10924[7]);var inst_10905__$1 = (state_10924[2]);var inst_10906 = (inst_10905__$1 == null);var state_10924__$1 = (function (){var statearr_10927 = state_10924;(statearr_10927[7] = inst_10905__$1);
return statearr_10927;
})();if(cljs.core.truth_(inst_10906))
{var statearr_10928_10948 = state_10924__$1;(statearr_10928_10948[1] = 5);
} else
{var statearr_10929_10949 = state_10924__$1;(statearr_10929_10949[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 5))
{var inst_10908 = cljs.core.async.close_BANG_.call(null,tc);var inst_10909 = cljs.core.async.close_BANG_.call(null,fc);var state_10924__$1 = (function (){var statearr_10930 = state_10924;(statearr_10930[8] = inst_10908);
return statearr_10930;
})();var statearr_10931_10950 = state_10924__$1;(statearr_10931_10950[2] = inst_10909);
(statearr_10931_10950[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 6))
{var inst_10905 = (state_10924[7]);var inst_10911 = p.call(null,inst_10905);var state_10924__$1 = state_10924;if(cljs.core.truth_(inst_10911))
{var statearr_10932_10951 = state_10924__$1;(statearr_10932_10951[1] = 9);
} else
{var statearr_10933_10952 = state_10924__$1;(statearr_10933_10952[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 7))
{var inst_10920 = (state_10924[2]);var state_10924__$1 = state_10924;var statearr_10934_10953 = state_10924__$1;(statearr_10934_10953[2] = inst_10920);
(statearr_10934_10953[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 8))
{var inst_10917 = (state_10924[2]);var state_10924__$1 = (function (){var statearr_10935 = state_10924;(statearr_10935[9] = inst_10917);
return statearr_10935;
})();var statearr_10936_10954 = state_10924__$1;(statearr_10936_10954[2] = null);
(statearr_10936_10954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 9))
{var state_10924__$1 = state_10924;var statearr_10937_10955 = state_10924__$1;(statearr_10937_10955[2] = tc);
(statearr_10937_10955[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 10))
{var state_10924__$1 = state_10924;var statearr_10938_10956 = state_10924__$1;(statearr_10938_10956[2] = fc);
(statearr_10938_10956[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10925 === 11))
{var inst_10905 = (state_10924[7]);var inst_10915 = (state_10924[2]);var state_10924__$1 = state_10924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10924__$1,8,inst_10915,inst_10905);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_10942 = [null,null,null,null,null,null,null,null,null,null];(statearr_10942[0] = state_machine__6161__auto__);
(statearr_10942[1] = 1);
return statearr_10942;
});
var state_machine__6161__auto____1 = (function (state_10924){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_10924);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e10943){if((e10943 instanceof Object))
{var ex__6164__auto__ = e10943;var statearr_10944_10957 = state_10924;(statearr_10944_10957[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10958 = state_10924;
state_10924 = G__10958;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_10924){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_10924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_10945 = f__6176__auto__.call(null);(statearr_10945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___10946);
return statearr_10945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11005){var state_val_11006 = (state_11005[1]);if((state_val_11006 === 7))
{var inst_11001 = (state_11005[2]);var state_11005__$1 = state_11005;var statearr_11007_11023 = state_11005__$1;(statearr_11007_11023[2] = inst_11001);
(statearr_11007_11023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 6))
{var inst_10994 = (state_11005[7]);var inst_10991 = (state_11005[8]);var inst_10998 = f.call(null,inst_10991,inst_10994);var inst_10991__$1 = inst_10998;var state_11005__$1 = (function (){var statearr_11008 = state_11005;(statearr_11008[8] = inst_10991__$1);
return statearr_11008;
})();var statearr_11009_11024 = state_11005__$1;(statearr_11009_11024[2] = null);
(statearr_11009_11024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 5))
{var inst_10991 = (state_11005[8]);var state_11005__$1 = state_11005;var statearr_11010_11025 = state_11005__$1;(statearr_11010_11025[2] = inst_10991);
(statearr_11010_11025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 4))
{var inst_10994 = (state_11005[7]);var inst_10994__$1 = (state_11005[2]);var inst_10995 = (inst_10994__$1 == null);var state_11005__$1 = (function (){var statearr_11011 = state_11005;(statearr_11011[7] = inst_10994__$1);
return statearr_11011;
})();if(cljs.core.truth_(inst_10995))
{var statearr_11012_11026 = state_11005__$1;(statearr_11012_11026[1] = 5);
} else
{var statearr_11013_11027 = state_11005__$1;(statearr_11013_11027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11006 === 3))
{var inst_11003 = (state_11005[2]);var state_11005__$1 = state_11005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11005__$1,inst_11003);
} else
{if((state_val_11006 === 2))
{var state_11005__$1 = state_11005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11005__$1,4,ch);
} else
{if((state_val_11006 === 1))
{var inst_10991 = init;var state_11005__$1 = (function (){var statearr_11014 = state_11005;(statearr_11014[8] = inst_10991);
return statearr_11014;
})();var statearr_11015_11028 = state_11005__$1;(statearr_11015_11028[2] = null);
(statearr_11015_11028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11019 = [null,null,null,null,null,null,null,null,null];(statearr_11019[0] = state_machine__6161__auto__);
(statearr_11019[1] = 1);
return statearr_11019;
});
var state_machine__6161__auto____1 = (function (state_11005){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11005);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11020){if((e11020 instanceof Object))
{var ex__6164__auto__ = e11020;var statearr_11021_11029 = state_11005;(statearr_11021_11029[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11020;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11030 = state_11005;
state_11005 = G__11030;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11005){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11022 = f__6176__auto__.call(null);(statearr_11022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11022;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11092){var state_val_11093 = (state_11092[1]);if((state_val_11093 === 1))
{var inst_11072 = cljs.core.seq.call(null,coll);var inst_11073 = inst_11072;var state_11092__$1 = (function (){var statearr_11094 = state_11092;(statearr_11094[7] = inst_11073);
return statearr_11094;
})();var statearr_11095_11113 = state_11092__$1;(statearr_11095_11113[2] = null);
(statearr_11095_11113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 2))
{var inst_11073 = (state_11092[7]);var state_11092__$1 = state_11092;if(cljs.core.truth_(inst_11073))
{var statearr_11096_11114 = state_11092__$1;(statearr_11096_11114[1] = 4);
} else
{var statearr_11097_11115 = state_11092__$1;(statearr_11097_11115[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 3))
{var inst_11090 = (state_11092[2]);var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11092__$1,inst_11090);
} else
{if((state_val_11093 === 4))
{var inst_11073 = (state_11092[7]);var inst_11076 = cljs.core.first.call(null,inst_11073);var state_11092__$1 = state_11092;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11092__$1,7,ch,inst_11076);
} else
{if((state_val_11093 === 5))
{var state_11092__$1 = state_11092;if(cljs.core.truth_(close_QMARK_))
{var statearr_11098_11116 = state_11092__$1;(statearr_11098_11116[1] = 8);
} else
{var statearr_11099_11117 = state_11092__$1;(statearr_11099_11117[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 6))
{var inst_11088 = (state_11092[2]);var state_11092__$1 = state_11092;var statearr_11100_11118 = state_11092__$1;(statearr_11100_11118[2] = inst_11088);
(statearr_11100_11118[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 7))
{var inst_11073 = (state_11092[7]);var inst_11078 = (state_11092[2]);var inst_11079 = cljs.core.next.call(null,inst_11073);var inst_11073__$1 = inst_11079;var state_11092__$1 = (function (){var statearr_11101 = state_11092;(statearr_11101[7] = inst_11073__$1);
(statearr_11101[8] = inst_11078);
return statearr_11101;
})();var statearr_11102_11119 = state_11092__$1;(statearr_11102_11119[2] = null);
(statearr_11102_11119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 8))
{var inst_11083 = cljs.core.async.close_BANG_.call(null,ch);var state_11092__$1 = state_11092;var statearr_11103_11120 = state_11092__$1;(statearr_11103_11120[2] = inst_11083);
(statearr_11103_11120[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 9))
{var state_11092__$1 = state_11092;var statearr_11104_11121 = state_11092__$1;(statearr_11104_11121[2] = null);
(statearr_11104_11121[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11093 === 10))
{var inst_11086 = (state_11092[2]);var state_11092__$1 = state_11092;var statearr_11105_11122 = state_11092__$1;(statearr_11105_11122[2] = inst_11086);
(statearr_11105_11122[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11109 = [null,null,null,null,null,null,null,null,null];(statearr_11109[0] = state_machine__6161__auto__);
(statearr_11109[1] = 1);
return statearr_11109;
});
var state_machine__6161__auto____1 = (function (state_11092){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11092);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11110){if((e11110 instanceof Object))
{var ex__6164__auto__ = e11110;var statearr_11111_11123 = state_11092;(statearr_11111_11123[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11092);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11124 = state_11092;
state_11092 = G__11124;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11092){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11112 = f__6176__auto__.call(null);(statearr_11112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_11112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11126 = {};return obj11126;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3396__auto__ = _;if(and__3396__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4029__auto__ = (((_ == null))?null:_);return (function (){var or__3408__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11128 = {};return obj11128;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11352 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11352 = (function (cs,ch,mult,meta11353){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11353 = meta11353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11352.cljs$lang$type = true;
cljs.core.async.t11352.cljs$lang$ctorStr = "cljs.core.async/t11352";
cljs.core.async.t11352.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11352");
});})(cs))
;
cljs.core.async.t11352.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11352.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11352.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11352.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11352.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11354){var self__ = this;
var _11354__$1 = this;return self__.meta11353;
});})(cs))
;
cljs.core.async.t11352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11354,meta11353__$1){var self__ = this;
var _11354__$1 = this;return (new cljs.core.async.t11352(self__.cs,self__.ch,self__.mult,meta11353__$1));
});})(cs))
;
cljs.core.async.__GT_t11352 = ((function (cs){
return (function __GT_t11352(cs__$1,ch__$1,mult__$1,meta11353){return (new cljs.core.async.t11352(cs__$1,ch__$1,mult__$1,meta11353));
});})(cs))
;
}
return (new cljs.core.async.t11352(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6175__auto___11575 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11489){var state_val_11490 = (state_11489[1]);if((state_val_11490 === 32))
{var inst_11357 = (state_11489[7]);var inst_11433 = (state_11489[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11489,31,Object,null,30);var inst_11440 = cljs.core.async.put_BANG_.call(null,inst_11433,inst_11357,done);var state_11489__$1 = state_11489;var statearr_11491_11576 = state_11489__$1;(statearr_11491_11576[2] = inst_11440);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 1))
{var state_11489__$1 = state_11489;var statearr_11492_11577 = state_11489__$1;(statearr_11492_11577[2] = null);
(statearr_11492_11577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 33))
{var inst_11446 = (state_11489[9]);var inst_11448 = cljs.core.chunked_seq_QMARK_.call(null,inst_11446);var state_11489__$1 = state_11489;if(inst_11448)
{var statearr_11493_11578 = state_11489__$1;(statearr_11493_11578[1] = 36);
} else
{var statearr_11494_11579 = state_11489__$1;(statearr_11494_11579[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 2))
{var state_11489__$1 = state_11489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11489__$1,4,ch);
} else
{if((state_val_11490 === 34))
{var state_11489__$1 = state_11489;var statearr_11495_11580 = state_11489__$1;(statearr_11495_11580[2] = null);
(statearr_11495_11580[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 3))
{var inst_11487 = (state_11489[2]);var state_11489__$1 = state_11489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11489__$1,inst_11487);
} else
{if((state_val_11490 === 35))
{var inst_11471 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11496_11581 = state_11489__$1;(statearr_11496_11581[2] = inst_11471);
(statearr_11496_11581[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 4))
{var inst_11357 = (state_11489[7]);var inst_11357__$1 = (state_11489[2]);var inst_11358 = (inst_11357__$1 == null);var state_11489__$1 = (function (){var statearr_11497 = state_11489;(statearr_11497[7] = inst_11357__$1);
return statearr_11497;
})();if(cljs.core.truth_(inst_11358))
{var statearr_11498_11582 = state_11489__$1;(statearr_11498_11582[1] = 5);
} else
{var statearr_11499_11583 = state_11489__$1;(statearr_11499_11583[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 36))
{var inst_11446 = (state_11489[9]);var inst_11450 = cljs.core.chunk_first.call(null,inst_11446);var inst_11451 = cljs.core.chunk_rest.call(null,inst_11446);var inst_11452 = cljs.core.count.call(null,inst_11450);var inst_11425 = inst_11451;var inst_11426 = inst_11450;var inst_11427 = inst_11452;var inst_11428 = 0;var state_11489__$1 = (function (){var statearr_11500 = state_11489;(statearr_11500[10] = inst_11428);
(statearr_11500[11] = inst_11427);
(statearr_11500[12] = inst_11425);
(statearr_11500[13] = inst_11426);
return statearr_11500;
})();var statearr_11501_11584 = state_11489__$1;(statearr_11501_11584[2] = null);
(statearr_11501_11584[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 5))
{var inst_11364 = cljs.core.deref.call(null,cs);var inst_11365 = cljs.core.seq.call(null,inst_11364);var inst_11366 = inst_11365;var inst_11367 = null;var inst_11368 = 0;var inst_11369 = 0;var state_11489__$1 = (function (){var statearr_11502 = state_11489;(statearr_11502[14] = inst_11368);
(statearr_11502[15] = inst_11369);
(statearr_11502[16] = inst_11367);
(statearr_11502[17] = inst_11366);
return statearr_11502;
})();var statearr_11503_11585 = state_11489__$1;(statearr_11503_11585[2] = null);
(statearr_11503_11585[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 37))
{var inst_11446 = (state_11489[9]);var inst_11455 = cljs.core.first.call(null,inst_11446);var state_11489__$1 = (function (){var statearr_11504 = state_11489;(statearr_11504[18] = inst_11455);
return statearr_11504;
})();var statearr_11505_11586 = state_11489__$1;(statearr_11505_11586[2] = null);
(statearr_11505_11586[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 6))
{var inst_11417 = (state_11489[19]);var inst_11416 = cljs.core.deref.call(null,cs);var inst_11417__$1 = cljs.core.keys.call(null,inst_11416);var inst_11418 = cljs.core.count.call(null,inst_11417__$1);var inst_11419 = cljs.core.reset_BANG_.call(null,dctr,inst_11418);var inst_11424 = cljs.core.seq.call(null,inst_11417__$1);var inst_11425 = inst_11424;var inst_11426 = null;var inst_11427 = 0;var inst_11428 = 0;var state_11489__$1 = (function (){var statearr_11506 = state_11489;(statearr_11506[10] = inst_11428);
(statearr_11506[11] = inst_11427);
(statearr_11506[19] = inst_11417__$1);
(statearr_11506[20] = inst_11419);
(statearr_11506[12] = inst_11425);
(statearr_11506[13] = inst_11426);
return statearr_11506;
})();var statearr_11507_11587 = state_11489__$1;(statearr_11507_11587[2] = null);
(statearr_11507_11587[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 38))
{var inst_11468 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11508_11588 = state_11489__$1;(statearr_11508_11588[2] = inst_11468);
(statearr_11508_11588[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 7))
{var inst_11485 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11509_11589 = state_11489__$1;(statearr_11509_11589[2] = inst_11485);
(statearr_11509_11589[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 39))
{var inst_11446 = (state_11489[9]);var inst_11464 = (state_11489[2]);var inst_11465 = cljs.core.next.call(null,inst_11446);var inst_11425 = inst_11465;var inst_11426 = null;var inst_11427 = 0;var inst_11428 = 0;var state_11489__$1 = (function (){var statearr_11510 = state_11489;(statearr_11510[10] = inst_11428);
(statearr_11510[11] = inst_11427);
(statearr_11510[21] = inst_11464);
(statearr_11510[12] = inst_11425);
(statearr_11510[13] = inst_11426);
return statearr_11510;
})();var statearr_11511_11590 = state_11489__$1;(statearr_11511_11590[2] = null);
(statearr_11511_11590[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 8))
{var inst_11368 = (state_11489[14]);var inst_11369 = (state_11489[15]);var inst_11371 = (inst_11369 < inst_11368);var inst_11372 = inst_11371;var state_11489__$1 = state_11489;if(cljs.core.truth_(inst_11372))
{var statearr_11512_11591 = state_11489__$1;(statearr_11512_11591[1] = 10);
} else
{var statearr_11513_11592 = state_11489__$1;(statearr_11513_11592[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 40))
{var inst_11455 = (state_11489[18]);var inst_11456 = (state_11489[2]);var inst_11457 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11458 = cljs.core.async.untap_STAR_.call(null,m,inst_11455);var state_11489__$1 = (function (){var statearr_11514 = state_11489;(statearr_11514[22] = inst_11456);
(statearr_11514[23] = inst_11457);
return statearr_11514;
})();var statearr_11515_11593 = state_11489__$1;(statearr_11515_11593[2] = inst_11458);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 9))
{var inst_11414 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11516_11594 = state_11489__$1;(statearr_11516_11594[2] = inst_11414);
(statearr_11516_11594[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 41))
{var inst_11455 = (state_11489[18]);var inst_11357 = (state_11489[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11489,40,Object,null,39);var inst_11462 = cljs.core.async.put_BANG_.call(null,inst_11455,inst_11357,done);var state_11489__$1 = state_11489;var statearr_11517_11595 = state_11489__$1;(statearr_11517_11595[2] = inst_11462);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 10))
{var inst_11369 = (state_11489[15]);var inst_11367 = (state_11489[16]);var inst_11375 = cljs.core._nth.call(null,inst_11367,inst_11369);var inst_11376 = cljs.core.nth.call(null,inst_11375,0,null);var inst_11377 = cljs.core.nth.call(null,inst_11375,1,null);var state_11489__$1 = (function (){var statearr_11518 = state_11489;(statearr_11518[24] = inst_11376);
return statearr_11518;
})();if(cljs.core.truth_(inst_11377))
{var statearr_11519_11596 = state_11489__$1;(statearr_11519_11596[1] = 13);
} else
{var statearr_11520_11597 = state_11489__$1;(statearr_11520_11597[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 42))
{var state_11489__$1 = state_11489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11489__$1,45,dchan);
} else
{if((state_val_11490 === 11))
{var inst_11386 = (state_11489[25]);var inst_11366 = (state_11489[17]);var inst_11386__$1 = cljs.core.seq.call(null,inst_11366);var state_11489__$1 = (function (){var statearr_11521 = state_11489;(statearr_11521[25] = inst_11386__$1);
return statearr_11521;
})();if(inst_11386__$1)
{var statearr_11522_11598 = state_11489__$1;(statearr_11522_11598[1] = 16);
} else
{var statearr_11523_11599 = state_11489__$1;(statearr_11523_11599[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 43))
{var state_11489__$1 = state_11489;var statearr_11524_11600 = state_11489__$1;(statearr_11524_11600[2] = null);
(statearr_11524_11600[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 12))
{var inst_11412 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11525_11601 = state_11489__$1;(statearr_11525_11601[2] = inst_11412);
(statearr_11525_11601[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 44))
{var inst_11482 = (state_11489[2]);var state_11489__$1 = (function (){var statearr_11526 = state_11489;(statearr_11526[26] = inst_11482);
return statearr_11526;
})();var statearr_11527_11602 = state_11489__$1;(statearr_11527_11602[2] = null);
(statearr_11527_11602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 13))
{var inst_11376 = (state_11489[24]);var inst_11379 = cljs.core.async.close_BANG_.call(null,inst_11376);var state_11489__$1 = state_11489;var statearr_11528_11603 = state_11489__$1;(statearr_11528_11603[2] = inst_11379);
(statearr_11528_11603[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 45))
{var inst_11479 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11532_11604 = state_11489__$1;(statearr_11532_11604[2] = inst_11479);
(statearr_11532_11604[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 14))
{var state_11489__$1 = state_11489;var statearr_11533_11605 = state_11489__$1;(statearr_11533_11605[2] = null);
(statearr_11533_11605[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 15))
{var inst_11368 = (state_11489[14]);var inst_11369 = (state_11489[15]);var inst_11367 = (state_11489[16]);var inst_11366 = (state_11489[17]);var inst_11382 = (state_11489[2]);var inst_11383 = (inst_11369 + 1);var tmp11529 = inst_11368;var tmp11530 = inst_11367;var tmp11531 = inst_11366;var inst_11366__$1 = tmp11531;var inst_11367__$1 = tmp11530;var inst_11368__$1 = tmp11529;var inst_11369__$1 = inst_11383;var state_11489__$1 = (function (){var statearr_11534 = state_11489;(statearr_11534[27] = inst_11382);
(statearr_11534[14] = inst_11368__$1);
(statearr_11534[15] = inst_11369__$1);
(statearr_11534[16] = inst_11367__$1);
(statearr_11534[17] = inst_11366__$1);
return statearr_11534;
})();var statearr_11535_11606 = state_11489__$1;(statearr_11535_11606[2] = null);
(statearr_11535_11606[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 16))
{var inst_11386 = (state_11489[25]);var inst_11388 = cljs.core.chunked_seq_QMARK_.call(null,inst_11386);var state_11489__$1 = state_11489;if(inst_11388)
{var statearr_11536_11607 = state_11489__$1;(statearr_11536_11607[1] = 19);
} else
{var statearr_11537_11608 = state_11489__$1;(statearr_11537_11608[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 17))
{var state_11489__$1 = state_11489;var statearr_11538_11609 = state_11489__$1;(statearr_11538_11609[2] = null);
(statearr_11538_11609[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 18))
{var inst_11410 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11539_11610 = state_11489__$1;(statearr_11539_11610[2] = inst_11410);
(statearr_11539_11610[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 19))
{var inst_11386 = (state_11489[25]);var inst_11390 = cljs.core.chunk_first.call(null,inst_11386);var inst_11391 = cljs.core.chunk_rest.call(null,inst_11386);var inst_11392 = cljs.core.count.call(null,inst_11390);var inst_11366 = inst_11391;var inst_11367 = inst_11390;var inst_11368 = inst_11392;var inst_11369 = 0;var state_11489__$1 = (function (){var statearr_11540 = state_11489;(statearr_11540[14] = inst_11368);
(statearr_11540[15] = inst_11369);
(statearr_11540[16] = inst_11367);
(statearr_11540[17] = inst_11366);
return statearr_11540;
})();var statearr_11541_11611 = state_11489__$1;(statearr_11541_11611[2] = null);
(statearr_11541_11611[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 20))
{var inst_11386 = (state_11489[25]);var inst_11396 = cljs.core.first.call(null,inst_11386);var inst_11397 = cljs.core.nth.call(null,inst_11396,0,null);var inst_11398 = cljs.core.nth.call(null,inst_11396,1,null);var state_11489__$1 = (function (){var statearr_11542 = state_11489;(statearr_11542[28] = inst_11397);
return statearr_11542;
})();if(cljs.core.truth_(inst_11398))
{var statearr_11543_11612 = state_11489__$1;(statearr_11543_11612[1] = 22);
} else
{var statearr_11544_11613 = state_11489__$1;(statearr_11544_11613[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 21))
{var inst_11407 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11545_11614 = state_11489__$1;(statearr_11545_11614[2] = inst_11407);
(statearr_11545_11614[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 22))
{var inst_11397 = (state_11489[28]);var inst_11400 = cljs.core.async.close_BANG_.call(null,inst_11397);var state_11489__$1 = state_11489;var statearr_11546_11615 = state_11489__$1;(statearr_11546_11615[2] = inst_11400);
(statearr_11546_11615[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 23))
{var state_11489__$1 = state_11489;var statearr_11547_11616 = state_11489__$1;(statearr_11547_11616[2] = null);
(statearr_11547_11616[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 24))
{var inst_11386 = (state_11489[25]);var inst_11403 = (state_11489[2]);var inst_11404 = cljs.core.next.call(null,inst_11386);var inst_11366 = inst_11404;var inst_11367 = null;var inst_11368 = 0;var inst_11369 = 0;var state_11489__$1 = (function (){var statearr_11548 = state_11489;(statearr_11548[14] = inst_11368);
(statearr_11548[15] = inst_11369);
(statearr_11548[29] = inst_11403);
(statearr_11548[16] = inst_11367);
(statearr_11548[17] = inst_11366);
return statearr_11548;
})();var statearr_11549_11617 = state_11489__$1;(statearr_11549_11617[2] = null);
(statearr_11549_11617[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 25))
{var inst_11428 = (state_11489[10]);var inst_11427 = (state_11489[11]);var inst_11430 = (inst_11428 < inst_11427);var inst_11431 = inst_11430;var state_11489__$1 = state_11489;if(cljs.core.truth_(inst_11431))
{var statearr_11550_11618 = state_11489__$1;(statearr_11550_11618[1] = 27);
} else
{var statearr_11551_11619 = state_11489__$1;(statearr_11551_11619[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 26))
{var inst_11417 = (state_11489[19]);var inst_11475 = (state_11489[2]);var inst_11476 = cljs.core.seq.call(null,inst_11417);var state_11489__$1 = (function (){var statearr_11552 = state_11489;(statearr_11552[30] = inst_11475);
return statearr_11552;
})();if(inst_11476)
{var statearr_11553_11620 = state_11489__$1;(statearr_11553_11620[1] = 42);
} else
{var statearr_11554_11621 = state_11489__$1;(statearr_11554_11621[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 27))
{var inst_11428 = (state_11489[10]);var inst_11426 = (state_11489[13]);var inst_11433 = cljs.core._nth.call(null,inst_11426,inst_11428);var state_11489__$1 = (function (){var statearr_11555 = state_11489;(statearr_11555[8] = inst_11433);
return statearr_11555;
})();var statearr_11556_11622 = state_11489__$1;(statearr_11556_11622[2] = null);
(statearr_11556_11622[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 28))
{var inst_11446 = (state_11489[9]);var inst_11425 = (state_11489[12]);var inst_11446__$1 = cljs.core.seq.call(null,inst_11425);var state_11489__$1 = (function (){var statearr_11560 = state_11489;(statearr_11560[9] = inst_11446__$1);
return statearr_11560;
})();if(inst_11446__$1)
{var statearr_11561_11623 = state_11489__$1;(statearr_11561_11623[1] = 33);
} else
{var statearr_11562_11624 = state_11489__$1;(statearr_11562_11624[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 29))
{var inst_11473 = (state_11489[2]);var state_11489__$1 = state_11489;var statearr_11563_11625 = state_11489__$1;(statearr_11563_11625[2] = inst_11473);
(statearr_11563_11625[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 30))
{var inst_11428 = (state_11489[10]);var inst_11427 = (state_11489[11]);var inst_11425 = (state_11489[12]);var inst_11426 = (state_11489[13]);var inst_11442 = (state_11489[2]);var inst_11443 = (inst_11428 + 1);var tmp11557 = inst_11427;var tmp11558 = inst_11425;var tmp11559 = inst_11426;var inst_11425__$1 = tmp11558;var inst_11426__$1 = tmp11559;var inst_11427__$1 = tmp11557;var inst_11428__$1 = inst_11443;var state_11489__$1 = (function (){var statearr_11564 = state_11489;(statearr_11564[10] = inst_11428__$1);
(statearr_11564[11] = inst_11427__$1);
(statearr_11564[31] = inst_11442);
(statearr_11564[12] = inst_11425__$1);
(statearr_11564[13] = inst_11426__$1);
return statearr_11564;
})();var statearr_11565_11626 = state_11489__$1;(statearr_11565_11626[2] = null);
(statearr_11565_11626[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11490 === 31))
{var inst_11433 = (state_11489[8]);var inst_11434 = (state_11489[2]);var inst_11435 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11436 = cljs.core.async.untap_STAR_.call(null,m,inst_11433);var state_11489__$1 = (function (){var statearr_11566 = state_11489;(statearr_11566[32] = inst_11434);
(statearr_11566[33] = inst_11435);
return statearr_11566;
})();var statearr_11567_11627 = state_11489__$1;(statearr_11567_11627[2] = inst_11436);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11571[0] = state_machine__6161__auto__);
(statearr_11571[1] = 1);
return statearr_11571;
});
var state_machine__6161__auto____1 = (function (state_11489){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11489);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11572){if((e11572 instanceof Object))
{var ex__6164__auto__ = e11572;var statearr_11573_11628 = state_11489;(statearr_11573_11628[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11489);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11572;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11629 = state_11489;
state_11489 = G__11629;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11489){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11574 = f__6176__auto__.call(null);(statearr_11574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11575);
return statearr_11574;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11631 = {};return obj11631;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3396__auto__ = m;if(and__3396__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4029__auto__ = (((m == null))?null:m);return (function (){var or__3408__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11741 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11741 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11742){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11742 = meta11742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11741.cljs$lang$type = true;
cljs.core.async.t11741.cljs$lang$ctorStr = "cljs.core.async/t11741";
cljs.core.async.t11741.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11741");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11741.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11743){var self__ = this;
var _11743__$1 = this;return self__.meta11742;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11743,meta11742__$1){var self__ = this;
var _11743__$1 = this;return (new cljs.core.async.t11741(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11742__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11741 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11741(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11742){return (new cljs.core.async.t11741(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11742));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11741(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6175__auto___11850 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_11808){var state_val_11809 = (state_11808[1]);if((state_val_11809 === 1))
{var inst_11747 = (state_11808[7]);var inst_11747__$1 = calc_state.call(null);var inst_11748 = cljs.core.seq_QMARK_.call(null,inst_11747__$1);var state_11808__$1 = (function (){var statearr_11810 = state_11808;(statearr_11810[7] = inst_11747__$1);
return statearr_11810;
})();if(inst_11748)
{var statearr_11811_11851 = state_11808__$1;(statearr_11811_11851[1] = 2);
} else
{var statearr_11812_11852 = state_11808__$1;(statearr_11812_11852[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 2))
{var inst_11747 = (state_11808[7]);var inst_11750 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11747);var state_11808__$1 = state_11808;var statearr_11813_11853 = state_11808__$1;(statearr_11813_11853[2] = inst_11750);
(statearr_11813_11853[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 3))
{var inst_11747 = (state_11808[7]);var state_11808__$1 = state_11808;var statearr_11814_11854 = state_11808__$1;(statearr_11814_11854[2] = inst_11747);
(statearr_11814_11854[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 4))
{var inst_11747 = (state_11808[7]);var inst_11753 = (state_11808[2]);var inst_11754 = cljs.core.get.call(null,inst_11753,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11755 = cljs.core.get.call(null,inst_11753,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11756 = cljs.core.get.call(null,inst_11753,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11757 = inst_11747;var state_11808__$1 = (function (){var statearr_11815 = state_11808;(statearr_11815[8] = inst_11757);
(statearr_11815[9] = inst_11754);
(statearr_11815[10] = inst_11755);
(statearr_11815[11] = inst_11756);
return statearr_11815;
})();var statearr_11816_11855 = state_11808__$1;(statearr_11816_11855[2] = null);
(statearr_11816_11855[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 5))
{var inst_11757 = (state_11808[8]);var inst_11760 = cljs.core.seq_QMARK_.call(null,inst_11757);var state_11808__$1 = state_11808;if(inst_11760)
{var statearr_11817_11856 = state_11808__$1;(statearr_11817_11856[1] = 7);
} else
{var statearr_11818_11857 = state_11808__$1;(statearr_11818_11857[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 6))
{var inst_11806 = (state_11808[2]);var state_11808__$1 = state_11808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11808__$1,inst_11806);
} else
{if((state_val_11809 === 7))
{var inst_11757 = (state_11808[8]);var inst_11762 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11757);var state_11808__$1 = state_11808;var statearr_11819_11858 = state_11808__$1;(statearr_11819_11858[2] = inst_11762);
(statearr_11819_11858[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 8))
{var inst_11757 = (state_11808[8]);var state_11808__$1 = state_11808;var statearr_11820_11859 = state_11808__$1;(statearr_11820_11859[2] = inst_11757);
(statearr_11820_11859[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 9))
{var inst_11765 = (state_11808[12]);var inst_11765__$1 = (state_11808[2]);var inst_11766 = cljs.core.get.call(null,inst_11765__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11767 = cljs.core.get.call(null,inst_11765__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11768 = cljs.core.get.call(null,inst_11765__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11808__$1 = (function (){var statearr_11821 = state_11808;(statearr_11821[12] = inst_11765__$1);
(statearr_11821[13] = inst_11767);
(statearr_11821[14] = inst_11768);
return statearr_11821;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11808__$1,10,inst_11766);
} else
{if((state_val_11809 === 10))
{var inst_11773 = (state_11808[15]);var inst_11772 = (state_11808[16]);var inst_11771 = (state_11808[2]);var inst_11772__$1 = cljs.core.nth.call(null,inst_11771,0,null);var inst_11773__$1 = cljs.core.nth.call(null,inst_11771,1,null);var inst_11774 = (inst_11772__$1 == null);var inst_11775 = cljs.core._EQ_.call(null,inst_11773__$1,change);var inst_11776 = (inst_11774) || (inst_11775);var state_11808__$1 = (function (){var statearr_11822 = state_11808;(statearr_11822[15] = inst_11773__$1);
(statearr_11822[16] = inst_11772__$1);
return statearr_11822;
})();if(cljs.core.truth_(inst_11776))
{var statearr_11823_11860 = state_11808__$1;(statearr_11823_11860[1] = 11);
} else
{var statearr_11824_11861 = state_11808__$1;(statearr_11824_11861[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 11))
{var inst_11772 = (state_11808[16]);var inst_11778 = (inst_11772 == null);var state_11808__$1 = state_11808;if(cljs.core.truth_(inst_11778))
{var statearr_11825_11862 = state_11808__$1;(statearr_11825_11862[1] = 14);
} else
{var statearr_11826_11863 = state_11808__$1;(statearr_11826_11863[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 12))
{var inst_11773 = (state_11808[15]);var inst_11768 = (state_11808[14]);var inst_11787 = (state_11808[17]);var inst_11787__$1 = inst_11768.call(null,inst_11773);var state_11808__$1 = (function (){var statearr_11827 = state_11808;(statearr_11827[17] = inst_11787__$1);
return statearr_11827;
})();if(cljs.core.truth_(inst_11787__$1))
{var statearr_11828_11864 = state_11808__$1;(statearr_11828_11864[1] = 17);
} else
{var statearr_11829_11865 = state_11808__$1;(statearr_11829_11865[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 13))
{var inst_11804 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11830_11866 = state_11808__$1;(statearr_11830_11866[2] = inst_11804);
(statearr_11830_11866[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 14))
{var inst_11773 = (state_11808[15]);var inst_11780 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11773);var state_11808__$1 = state_11808;var statearr_11831_11867 = state_11808__$1;(statearr_11831_11867[2] = inst_11780);
(statearr_11831_11867[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 15))
{var state_11808__$1 = state_11808;var statearr_11832_11868 = state_11808__$1;(statearr_11832_11868[2] = null);
(statearr_11832_11868[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 16))
{var inst_11783 = (state_11808[2]);var inst_11784 = calc_state.call(null);var inst_11757 = inst_11784;var state_11808__$1 = (function (){var statearr_11833 = state_11808;(statearr_11833[18] = inst_11783);
(statearr_11833[8] = inst_11757);
return statearr_11833;
})();var statearr_11834_11869 = state_11808__$1;(statearr_11834_11869[2] = null);
(statearr_11834_11869[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 17))
{var inst_11787 = (state_11808[17]);var state_11808__$1 = state_11808;var statearr_11835_11870 = state_11808__$1;(statearr_11835_11870[2] = inst_11787);
(statearr_11835_11870[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 18))
{var inst_11773 = (state_11808[15]);var inst_11767 = (state_11808[13]);var inst_11768 = (state_11808[14]);var inst_11790 = cljs.core.empty_QMARK_.call(null,inst_11768);var inst_11791 = inst_11767.call(null,inst_11773);var inst_11792 = cljs.core.not.call(null,inst_11791);var inst_11793 = (inst_11790) && (inst_11792);var state_11808__$1 = state_11808;var statearr_11836_11871 = state_11808__$1;(statearr_11836_11871[2] = inst_11793);
(statearr_11836_11871[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 19))
{var inst_11795 = (state_11808[2]);var state_11808__$1 = state_11808;if(cljs.core.truth_(inst_11795))
{var statearr_11837_11872 = state_11808__$1;(statearr_11837_11872[1] = 20);
} else
{var statearr_11838_11873 = state_11808__$1;(statearr_11838_11873[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 20))
{var inst_11772 = (state_11808[16]);var state_11808__$1 = state_11808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11808__$1,23,out,inst_11772);
} else
{if((state_val_11809 === 21))
{var state_11808__$1 = state_11808;var statearr_11839_11874 = state_11808__$1;(statearr_11839_11874[2] = null);
(statearr_11839_11874[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 22))
{var inst_11765 = (state_11808[12]);var inst_11801 = (state_11808[2]);var inst_11757 = inst_11765;var state_11808__$1 = (function (){var statearr_11840 = state_11808;(statearr_11840[8] = inst_11757);
(statearr_11840[19] = inst_11801);
return statearr_11840;
})();var statearr_11841_11875 = state_11808__$1;(statearr_11841_11875[2] = null);
(statearr_11841_11875[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11809 === 23))
{var inst_11798 = (state_11808[2]);var state_11808__$1 = state_11808;var statearr_11842_11876 = state_11808__$1;(statearr_11842_11876[2] = inst_11798);
(statearr_11842_11876[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_11846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11846[0] = state_machine__6161__auto__);
(statearr_11846[1] = 1);
return statearr_11846;
});
var state_machine__6161__auto____1 = (function (state_11808){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_11808);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e11847){if((e11847 instanceof Object))
{var ex__6164__auto__ = e11847;var statearr_11848_11877 = state_11808;(statearr_11848_11877[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11878 = state_11808;
state_11808 = G__11878;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_11808){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_11808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_11849 = f__6176__auto__.call(null);(statearr_11849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___11850);
return statearr_11849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11880 = {};return obj11880;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3396__auto__ = p;if(and__3396__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3396__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4029__auto__ = (((p == null))?null:p);return (function (){var or__3408__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3408__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3408__auto__,mults){
return (function (p1__11881_SHARP_){if(cljs.core.truth_(p1__11881_SHARP_.call(null,topic)))
{return p1__11881_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11881_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3408__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12006 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12007){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12007 = meta12007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12006.cljs$lang$type = true;
cljs.core.async.t12006.cljs$lang$ctorStr = "cljs.core.async/t12006";
cljs.core.async.t12006.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12006");
});})(mults,ensure_mult))
;
cljs.core.async.t12006.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12006.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12006.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12006.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12006.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12008){var self__ = this;
var _12008__$1 = this;return self__.meta12007;
});})(mults,ensure_mult))
;
cljs.core.async.t12006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12008,meta12007__$1){var self__ = this;
var _12008__$1 = this;return (new cljs.core.async.t12006(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12007__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12006 = ((function (mults,ensure_mult){
return (function __GT_t12006(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12007){return (new cljs.core.async.t12006(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12007));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12006(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6175__auto___12130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12082){var state_val_12083 = (state_12082[1]);if((state_val_12083 === 1))
{var state_12082__$1 = state_12082;var statearr_12084_12131 = state_12082__$1;(statearr_12084_12131[2] = null);
(statearr_12084_12131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 2))
{var state_12082__$1 = state_12082;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12082__$1,4,ch);
} else
{if((state_val_12083 === 3))
{var inst_12080 = (state_12082[2]);var state_12082__$1 = state_12082;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12082__$1,inst_12080);
} else
{if((state_val_12083 === 4))
{var inst_12011 = (state_12082[7]);var inst_12011__$1 = (state_12082[2]);var inst_12012 = (inst_12011__$1 == null);var state_12082__$1 = (function (){var statearr_12085 = state_12082;(statearr_12085[7] = inst_12011__$1);
return statearr_12085;
})();if(cljs.core.truth_(inst_12012))
{var statearr_12086_12132 = state_12082__$1;(statearr_12086_12132[1] = 5);
} else
{var statearr_12087_12133 = state_12082__$1;(statearr_12087_12133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 5))
{var inst_12018 = cljs.core.deref.call(null,mults);var inst_12019 = cljs.core.vals.call(null,inst_12018);var inst_12020 = cljs.core.seq.call(null,inst_12019);var inst_12021 = inst_12020;var inst_12022 = null;var inst_12023 = 0;var inst_12024 = 0;var state_12082__$1 = (function (){var statearr_12088 = state_12082;(statearr_12088[8] = inst_12022);
(statearr_12088[9] = inst_12023);
(statearr_12088[10] = inst_12021);
(statearr_12088[11] = inst_12024);
return statearr_12088;
})();var statearr_12089_12134 = state_12082__$1;(statearr_12089_12134[2] = null);
(statearr_12089_12134[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 6))
{var inst_12061 = (state_12082[12]);var inst_12059 = (state_12082[13]);var inst_12011 = (state_12082[7]);var inst_12059__$1 = topic_fn.call(null,inst_12011);var inst_12060 = cljs.core.deref.call(null,mults);var inst_12061__$1 = cljs.core.get.call(null,inst_12060,inst_12059__$1);var state_12082__$1 = (function (){var statearr_12090 = state_12082;(statearr_12090[12] = inst_12061__$1);
(statearr_12090[13] = inst_12059__$1);
return statearr_12090;
})();if(cljs.core.truth_(inst_12061__$1))
{var statearr_12091_12135 = state_12082__$1;(statearr_12091_12135[1] = 19);
} else
{var statearr_12092_12136 = state_12082__$1;(statearr_12092_12136[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 7))
{var inst_12078 = (state_12082[2]);var state_12082__$1 = state_12082;var statearr_12093_12137 = state_12082__$1;(statearr_12093_12137[2] = inst_12078);
(statearr_12093_12137[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 8))
{var inst_12023 = (state_12082[9]);var inst_12024 = (state_12082[11]);var inst_12026 = (inst_12024 < inst_12023);var inst_12027 = inst_12026;var state_12082__$1 = state_12082;if(cljs.core.truth_(inst_12027))
{var statearr_12097_12138 = state_12082__$1;(statearr_12097_12138[1] = 10);
} else
{var statearr_12098_12139 = state_12082__$1;(statearr_12098_12139[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 9))
{var inst_12057 = (state_12082[2]);var state_12082__$1 = state_12082;var statearr_12099_12140 = state_12082__$1;(statearr_12099_12140[2] = inst_12057);
(statearr_12099_12140[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 10))
{var inst_12022 = (state_12082[8]);var inst_12023 = (state_12082[9]);var inst_12021 = (state_12082[10]);var inst_12024 = (state_12082[11]);var inst_12029 = cljs.core._nth.call(null,inst_12022,inst_12024);var inst_12030 = cljs.core.async.muxch_STAR_.call(null,inst_12029);var inst_12031 = cljs.core.async.close_BANG_.call(null,inst_12030);var inst_12032 = (inst_12024 + 1);var tmp12094 = inst_12022;var tmp12095 = inst_12023;var tmp12096 = inst_12021;var inst_12021__$1 = tmp12096;var inst_12022__$1 = tmp12094;var inst_12023__$1 = tmp12095;var inst_12024__$1 = inst_12032;var state_12082__$1 = (function (){var statearr_12100 = state_12082;(statearr_12100[8] = inst_12022__$1);
(statearr_12100[9] = inst_12023__$1);
(statearr_12100[10] = inst_12021__$1);
(statearr_12100[14] = inst_12031);
(statearr_12100[11] = inst_12024__$1);
return statearr_12100;
})();var statearr_12101_12141 = state_12082__$1;(statearr_12101_12141[2] = null);
(statearr_12101_12141[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 11))
{var inst_12021 = (state_12082[10]);var inst_12035 = (state_12082[15]);var inst_12035__$1 = cljs.core.seq.call(null,inst_12021);var state_12082__$1 = (function (){var statearr_12102 = state_12082;(statearr_12102[15] = inst_12035__$1);
return statearr_12102;
})();if(inst_12035__$1)
{var statearr_12103_12142 = state_12082__$1;(statearr_12103_12142[1] = 13);
} else
{var statearr_12104_12143 = state_12082__$1;(statearr_12104_12143[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 12))
{var inst_12055 = (state_12082[2]);var state_12082__$1 = state_12082;var statearr_12105_12144 = state_12082__$1;(statearr_12105_12144[2] = inst_12055);
(statearr_12105_12144[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 13))
{var inst_12035 = (state_12082[15]);var inst_12037 = cljs.core.chunked_seq_QMARK_.call(null,inst_12035);var state_12082__$1 = state_12082;if(inst_12037)
{var statearr_12106_12145 = state_12082__$1;(statearr_12106_12145[1] = 16);
} else
{var statearr_12107_12146 = state_12082__$1;(statearr_12107_12146[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 14))
{var state_12082__$1 = state_12082;var statearr_12108_12147 = state_12082__$1;(statearr_12108_12147[2] = null);
(statearr_12108_12147[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 15))
{var inst_12053 = (state_12082[2]);var state_12082__$1 = state_12082;var statearr_12109_12148 = state_12082__$1;(statearr_12109_12148[2] = inst_12053);
(statearr_12109_12148[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 16))
{var inst_12035 = (state_12082[15]);var inst_12039 = cljs.core.chunk_first.call(null,inst_12035);var inst_12040 = cljs.core.chunk_rest.call(null,inst_12035);var inst_12041 = cljs.core.count.call(null,inst_12039);var inst_12021 = inst_12040;var inst_12022 = inst_12039;var inst_12023 = inst_12041;var inst_12024 = 0;var state_12082__$1 = (function (){var statearr_12110 = state_12082;(statearr_12110[8] = inst_12022);
(statearr_12110[9] = inst_12023);
(statearr_12110[10] = inst_12021);
(statearr_12110[11] = inst_12024);
return statearr_12110;
})();var statearr_12111_12149 = state_12082__$1;(statearr_12111_12149[2] = null);
(statearr_12111_12149[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 17))
{var inst_12035 = (state_12082[15]);var inst_12044 = cljs.core.first.call(null,inst_12035);var inst_12045 = cljs.core.async.muxch_STAR_.call(null,inst_12044);var inst_12046 = cljs.core.async.close_BANG_.call(null,inst_12045);var inst_12047 = cljs.core.next.call(null,inst_12035);var inst_12021 = inst_12047;var inst_12022 = null;var inst_12023 = 0;var inst_12024 = 0;var state_12082__$1 = (function (){var statearr_12112 = state_12082;(statearr_12112[8] = inst_12022);
(statearr_12112[9] = inst_12023);
(statearr_12112[10] = inst_12021);
(statearr_12112[11] = inst_12024);
(statearr_12112[16] = inst_12046);
return statearr_12112;
})();var statearr_12113_12150 = state_12082__$1;(statearr_12113_12150[2] = null);
(statearr_12113_12150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 18))
{var inst_12050 = (state_12082[2]);var state_12082__$1 = state_12082;var statearr_12114_12151 = state_12082__$1;(statearr_12114_12151[2] = inst_12050);
(statearr_12114_12151[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 19))
{var state_12082__$1 = state_12082;var statearr_12115_12152 = state_12082__$1;(statearr_12115_12152[2] = null);
(statearr_12115_12152[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 20))
{var state_12082__$1 = state_12082;var statearr_12116_12153 = state_12082__$1;(statearr_12116_12153[2] = null);
(statearr_12116_12153[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 21))
{var inst_12075 = (state_12082[2]);var state_12082__$1 = (function (){var statearr_12117 = state_12082;(statearr_12117[17] = inst_12075);
return statearr_12117;
})();var statearr_12118_12154 = state_12082__$1;(statearr_12118_12154[2] = null);
(statearr_12118_12154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 22))
{var inst_12072 = (state_12082[2]);var state_12082__$1 = state_12082;var statearr_12119_12155 = state_12082__$1;(statearr_12119_12155[2] = inst_12072);
(statearr_12119_12155[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 23))
{var inst_12059 = (state_12082[13]);var inst_12063 = (state_12082[2]);var inst_12064 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12059);var state_12082__$1 = (function (){var statearr_12120 = state_12082;(statearr_12120[18] = inst_12063);
return statearr_12120;
})();var statearr_12121_12156 = state_12082__$1;(statearr_12121_12156[2] = inst_12064);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12082__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12083 === 24))
{var inst_12061 = (state_12082[12]);var inst_12011 = (state_12082[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12082,23,Object,null,22);var inst_12068 = cljs.core.async.muxch_STAR_.call(null,inst_12061);var state_12082__$1 = state_12082;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12082__$1,25,inst_12068,inst_12011);
} else
{if((state_val_12083 === 25))
{var inst_12070 = (state_12082[2]);var state_12082__$1 = state_12082;var statearr_12122_12157 = state_12082__$1;(statearr_12122_12157[2] = inst_12070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12082__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12126[0] = state_machine__6161__auto__);
(statearr_12126[1] = 1);
return statearr_12126;
});
var state_machine__6161__auto____1 = (function (state_12082){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12082);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12127){if((e12127 instanceof Object))
{var ex__6164__auto__ = e12127;var statearr_12128_12158 = state_12082;(statearr_12128_12158[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12082);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12159 = state_12082;
state_12082 = G__12159;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12082){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12129 = f__6176__auto__.call(null);(statearr_12129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12130);
return statearr_12129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6175__auto___12296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12266){var state_val_12267 = (state_12266[1]);if((state_val_12267 === 1))
{var state_12266__$1 = state_12266;var statearr_12268_12297 = state_12266__$1;(statearr_12268_12297[2] = null);
(statearr_12268_12297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 2))
{var inst_12229 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12230 = 0;var state_12266__$1 = (function (){var statearr_12269 = state_12266;(statearr_12269[7] = inst_12229);
(statearr_12269[8] = inst_12230);
return statearr_12269;
})();var statearr_12270_12298 = state_12266__$1;(statearr_12270_12298[2] = null);
(statearr_12270_12298[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 3))
{var inst_12264 = (state_12266[2]);var state_12266__$1 = state_12266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12266__$1,inst_12264);
} else
{if((state_val_12267 === 4))
{var inst_12230 = (state_12266[8]);var inst_12232 = (inst_12230 < cnt);var state_12266__$1 = state_12266;if(cljs.core.truth_(inst_12232))
{var statearr_12271_12299 = state_12266__$1;(statearr_12271_12299[1] = 6);
} else
{var statearr_12272_12300 = state_12266__$1;(statearr_12272_12300[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 5))
{var inst_12250 = (state_12266[2]);var state_12266__$1 = (function (){var statearr_12273 = state_12266;(statearr_12273[9] = inst_12250);
return statearr_12273;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12266__$1,12,dchan);
} else
{if((state_val_12267 === 6))
{var state_12266__$1 = state_12266;var statearr_12274_12301 = state_12266__$1;(statearr_12274_12301[2] = null);
(statearr_12274_12301[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 7))
{var state_12266__$1 = state_12266;var statearr_12275_12302 = state_12266__$1;(statearr_12275_12302[2] = null);
(statearr_12275_12302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 8))
{var inst_12248 = (state_12266[2]);var state_12266__$1 = state_12266;var statearr_12276_12303 = state_12266__$1;(statearr_12276_12303[2] = inst_12248);
(statearr_12276_12303[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 9))
{var inst_12230 = (state_12266[8]);var inst_12243 = (state_12266[2]);var inst_12244 = (inst_12230 + 1);var inst_12230__$1 = inst_12244;var state_12266__$1 = (function (){var statearr_12277 = state_12266;(statearr_12277[8] = inst_12230__$1);
(statearr_12277[10] = inst_12243);
return statearr_12277;
})();var statearr_12278_12304 = state_12266__$1;(statearr_12278_12304[2] = null);
(statearr_12278_12304[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 10))
{var inst_12234 = (state_12266[2]);var inst_12235 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12266__$1 = (function (){var statearr_12279 = state_12266;(statearr_12279[11] = inst_12234);
return statearr_12279;
})();var statearr_12280_12305 = state_12266__$1;(statearr_12280_12305[2] = inst_12235);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12266__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 11))
{var inst_12230 = (state_12266[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12266,10,Object,null,9);var inst_12239 = chs__$1.call(null,inst_12230);var inst_12240 = done.call(null,inst_12230);var inst_12241 = cljs.core.async.take_BANG_.call(null,inst_12239,inst_12240);var state_12266__$1 = state_12266;var statearr_12281_12306 = state_12266__$1;(statearr_12281_12306[2] = inst_12241);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12266__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 12))
{var inst_12252 = (state_12266[12]);var inst_12252__$1 = (state_12266[2]);var inst_12253 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12252__$1);var state_12266__$1 = (function (){var statearr_12282 = state_12266;(statearr_12282[12] = inst_12252__$1);
return statearr_12282;
})();if(cljs.core.truth_(inst_12253))
{var statearr_12283_12307 = state_12266__$1;(statearr_12283_12307[1] = 13);
} else
{var statearr_12284_12308 = state_12266__$1;(statearr_12284_12308[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 13))
{var inst_12255 = cljs.core.async.close_BANG_.call(null,out);var state_12266__$1 = state_12266;var statearr_12285_12309 = state_12266__$1;(statearr_12285_12309[2] = inst_12255);
(statearr_12285_12309[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 14))
{var inst_12252 = (state_12266[12]);var inst_12257 = cljs.core.apply.call(null,f,inst_12252);var state_12266__$1 = state_12266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12266__$1,16,out,inst_12257);
} else
{if((state_val_12267 === 15))
{var inst_12262 = (state_12266[2]);var state_12266__$1 = state_12266;var statearr_12286_12310 = state_12266__$1;(statearr_12286_12310[2] = inst_12262);
(statearr_12286_12310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12267 === 16))
{var inst_12259 = (state_12266[2]);var state_12266__$1 = (function (){var statearr_12287 = state_12266;(statearr_12287[13] = inst_12259);
return statearr_12287;
})();var statearr_12288_12311 = state_12266__$1;(statearr_12288_12311[2] = null);
(statearr_12288_12311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12292[0] = state_machine__6161__auto__);
(statearr_12292[1] = 1);
return statearr_12292;
});
var state_machine__6161__auto____1 = (function (state_12266){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12266);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12293){if((e12293 instanceof Object))
{var ex__6164__auto__ = e12293;var statearr_12294_12312 = state_12266;(statearr_12294_12312[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12313 = state_12266;
state_12266 = G__12313;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12266){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12295 = f__6176__auto__.call(null);(statearr_12295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12296);
return statearr_12295;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12421 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12397){var state_val_12398 = (state_12397[1]);if((state_val_12398 === 1))
{var inst_12368 = cljs.core.vec.call(null,chs);var inst_12369 = inst_12368;var state_12397__$1 = (function (){var statearr_12399 = state_12397;(statearr_12399[7] = inst_12369);
return statearr_12399;
})();var statearr_12400_12422 = state_12397__$1;(statearr_12400_12422[2] = null);
(statearr_12400_12422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12398 === 2))
{var inst_12369 = (state_12397[7]);var inst_12371 = cljs.core.count.call(null,inst_12369);var inst_12372 = (inst_12371 > 0);var state_12397__$1 = state_12397;if(cljs.core.truth_(inst_12372))
{var statearr_12401_12423 = state_12397__$1;(statearr_12401_12423[1] = 4);
} else
{var statearr_12402_12424 = state_12397__$1;(statearr_12402_12424[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12398 === 3))
{var inst_12395 = (state_12397[2]);var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12397__$1,inst_12395);
} else
{if((state_val_12398 === 4))
{var inst_12369 = (state_12397[7]);var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12397__$1,7,inst_12369);
} else
{if((state_val_12398 === 5))
{var inst_12391 = cljs.core.async.close_BANG_.call(null,out);var state_12397__$1 = state_12397;var statearr_12403_12425 = state_12397__$1;(statearr_12403_12425[2] = inst_12391);
(statearr_12403_12425[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12398 === 6))
{var inst_12393 = (state_12397[2]);var state_12397__$1 = state_12397;var statearr_12404_12426 = state_12397__$1;(statearr_12404_12426[2] = inst_12393);
(statearr_12404_12426[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12398 === 7))
{var inst_12377 = (state_12397[8]);var inst_12376 = (state_12397[9]);var inst_12376__$1 = (state_12397[2]);var inst_12377__$1 = cljs.core.nth.call(null,inst_12376__$1,0,null);var inst_12378 = cljs.core.nth.call(null,inst_12376__$1,1,null);var inst_12379 = (inst_12377__$1 == null);var state_12397__$1 = (function (){var statearr_12405 = state_12397;(statearr_12405[10] = inst_12378);
(statearr_12405[8] = inst_12377__$1);
(statearr_12405[9] = inst_12376__$1);
return statearr_12405;
})();if(cljs.core.truth_(inst_12379))
{var statearr_12406_12427 = state_12397__$1;(statearr_12406_12427[1] = 8);
} else
{var statearr_12407_12428 = state_12397__$1;(statearr_12407_12428[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12398 === 8))
{var inst_12369 = (state_12397[7]);var inst_12378 = (state_12397[10]);var inst_12377 = (state_12397[8]);var inst_12376 = (state_12397[9]);var inst_12381 = (function (){var c = inst_12378;var v = inst_12377;var vec__12374 = inst_12376;var cs = inst_12369;return ((function (c,v,vec__12374,cs,inst_12369,inst_12378,inst_12377,inst_12376,state_val_12398){
return (function (p1__12314_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12314_SHARP_);
});
;})(c,v,vec__12374,cs,inst_12369,inst_12378,inst_12377,inst_12376,state_val_12398))
})();var inst_12382 = cljs.core.filterv.call(null,inst_12381,inst_12369);var inst_12369__$1 = inst_12382;var state_12397__$1 = (function (){var statearr_12408 = state_12397;(statearr_12408[7] = inst_12369__$1);
return statearr_12408;
})();var statearr_12409_12429 = state_12397__$1;(statearr_12409_12429[2] = null);
(statearr_12409_12429[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12398 === 9))
{var inst_12377 = (state_12397[8]);var state_12397__$1 = state_12397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12397__$1,11,out,inst_12377);
} else
{if((state_val_12398 === 10))
{var inst_12389 = (state_12397[2]);var state_12397__$1 = state_12397;var statearr_12411_12430 = state_12397__$1;(statearr_12411_12430[2] = inst_12389);
(statearr_12411_12430[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12398 === 11))
{var inst_12369 = (state_12397[7]);var inst_12386 = (state_12397[2]);var tmp12410 = inst_12369;var inst_12369__$1 = tmp12410;var state_12397__$1 = (function (){var statearr_12412 = state_12397;(statearr_12412[11] = inst_12386);
(statearr_12412[7] = inst_12369__$1);
return statearr_12412;
})();var statearr_12413_12431 = state_12397__$1;(statearr_12413_12431[2] = null);
(statearr_12413_12431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12417 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12417[0] = state_machine__6161__auto__);
(statearr_12417[1] = 1);
return statearr_12417;
});
var state_machine__6161__auto____1 = (function (state_12397){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12397);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12418){if((e12418 instanceof Object))
{var ex__6164__auto__ = e12418;var statearr_12419_12432 = state_12397;(statearr_12419_12432[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12433 = state_12397;
state_12397 = G__12433;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12397){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12420 = f__6176__auto__.call(null);(statearr_12420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12421);
return statearr_12420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12526 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12503){var state_val_12504 = (state_12503[1]);if((state_val_12504 === 1))
{var inst_12480 = 0;var state_12503__$1 = (function (){var statearr_12505 = state_12503;(statearr_12505[7] = inst_12480);
return statearr_12505;
})();var statearr_12506_12527 = state_12503__$1;(statearr_12506_12527[2] = null);
(statearr_12506_12527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 2))
{var inst_12480 = (state_12503[7]);var inst_12482 = (inst_12480 < n);var state_12503__$1 = state_12503;if(cljs.core.truth_(inst_12482))
{var statearr_12507_12528 = state_12503__$1;(statearr_12507_12528[1] = 4);
} else
{var statearr_12508_12529 = state_12503__$1;(statearr_12508_12529[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 3))
{var inst_12500 = (state_12503[2]);var inst_12501 = cljs.core.async.close_BANG_.call(null,out);var state_12503__$1 = (function (){var statearr_12509 = state_12503;(statearr_12509[8] = inst_12500);
return statearr_12509;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12503__$1,inst_12501);
} else
{if((state_val_12504 === 4))
{var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12503__$1,7,ch);
} else
{if((state_val_12504 === 5))
{var state_12503__$1 = state_12503;var statearr_12510_12530 = state_12503__$1;(statearr_12510_12530[2] = null);
(statearr_12510_12530[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 6))
{var inst_12498 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12511_12531 = state_12503__$1;(statearr_12511_12531[2] = inst_12498);
(statearr_12511_12531[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 7))
{var inst_12485 = (state_12503[9]);var inst_12485__$1 = (state_12503[2]);var inst_12486 = (inst_12485__$1 == null);var inst_12487 = cljs.core.not.call(null,inst_12486);var state_12503__$1 = (function (){var statearr_12512 = state_12503;(statearr_12512[9] = inst_12485__$1);
return statearr_12512;
})();if(inst_12487)
{var statearr_12513_12532 = state_12503__$1;(statearr_12513_12532[1] = 8);
} else
{var statearr_12514_12533 = state_12503__$1;(statearr_12514_12533[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 8))
{var inst_12485 = (state_12503[9]);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12503__$1,11,out,inst_12485);
} else
{if((state_val_12504 === 9))
{var state_12503__$1 = state_12503;var statearr_12515_12534 = state_12503__$1;(statearr_12515_12534[2] = null);
(statearr_12515_12534[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 10))
{var inst_12495 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12516_12535 = state_12503__$1;(statearr_12516_12535[2] = inst_12495);
(statearr_12516_12535[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 11))
{var inst_12480 = (state_12503[7]);var inst_12490 = (state_12503[2]);var inst_12491 = (inst_12480 + 1);var inst_12480__$1 = inst_12491;var state_12503__$1 = (function (){var statearr_12517 = state_12503;(statearr_12517[7] = inst_12480__$1);
(statearr_12517[10] = inst_12490);
return statearr_12517;
})();var statearr_12518_12536 = state_12503__$1;(statearr_12518_12536[2] = null);
(statearr_12518_12536[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12522 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12522[0] = state_machine__6161__auto__);
(statearr_12522[1] = 1);
return statearr_12522;
});
var state_machine__6161__auto____1 = (function (state_12503){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12523){if((e12523 instanceof Object))
{var ex__6164__auto__ = e12523;var statearr_12524_12537 = state_12503;(statearr_12524_12537[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12523;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12538 = state_12503;
state_12503 = G__12538;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12525 = f__6176__auto__.call(null);(statearr_12525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12526);
return statearr_12525;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12610){var state_val_12611 = (state_12610[1]);if((state_val_12611 === 1))
{var inst_12587 = null;var state_12610__$1 = (function (){var statearr_12612 = state_12610;(statearr_12612[7] = inst_12587);
return statearr_12612;
})();var statearr_12613_12636 = state_12610__$1;(statearr_12613_12636[2] = null);
(statearr_12613_12636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 2))
{var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12610__$1,4,ch);
} else
{if((state_val_12611 === 3))
{var inst_12607 = (state_12610[2]);var inst_12608 = cljs.core.async.close_BANG_.call(null,out);var state_12610__$1 = (function (){var statearr_12614 = state_12610;(statearr_12614[8] = inst_12607);
return statearr_12614;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12610__$1,inst_12608);
} else
{if((state_val_12611 === 4))
{var inst_12590 = (state_12610[9]);var inst_12590__$1 = (state_12610[2]);var inst_12591 = (inst_12590__$1 == null);var inst_12592 = cljs.core.not.call(null,inst_12591);var state_12610__$1 = (function (){var statearr_12615 = state_12610;(statearr_12615[9] = inst_12590__$1);
return statearr_12615;
})();if(inst_12592)
{var statearr_12616_12637 = state_12610__$1;(statearr_12616_12637[1] = 5);
} else
{var statearr_12617_12638 = state_12610__$1;(statearr_12617_12638[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 5))
{var inst_12587 = (state_12610[7]);var inst_12590 = (state_12610[9]);var inst_12594 = cljs.core._EQ_.call(null,inst_12590,inst_12587);var state_12610__$1 = state_12610;if(inst_12594)
{var statearr_12618_12639 = state_12610__$1;(statearr_12618_12639[1] = 8);
} else
{var statearr_12619_12640 = state_12610__$1;(statearr_12619_12640[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 6))
{var state_12610__$1 = state_12610;var statearr_12621_12641 = state_12610__$1;(statearr_12621_12641[2] = null);
(statearr_12621_12641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 7))
{var inst_12605 = (state_12610[2]);var state_12610__$1 = state_12610;var statearr_12622_12642 = state_12610__$1;(statearr_12622_12642[2] = inst_12605);
(statearr_12622_12642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 8))
{var inst_12587 = (state_12610[7]);var tmp12620 = inst_12587;var inst_12587__$1 = tmp12620;var state_12610__$1 = (function (){var statearr_12623 = state_12610;(statearr_12623[7] = inst_12587__$1);
return statearr_12623;
})();var statearr_12624_12643 = state_12610__$1;(statearr_12624_12643[2] = null);
(statearr_12624_12643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 9))
{var inst_12590 = (state_12610[9]);var state_12610__$1 = state_12610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12610__$1,11,out,inst_12590);
} else
{if((state_val_12611 === 10))
{var inst_12602 = (state_12610[2]);var state_12610__$1 = state_12610;var statearr_12625_12644 = state_12610__$1;(statearr_12625_12644[2] = inst_12602);
(statearr_12625_12644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12611 === 11))
{var inst_12590 = (state_12610[9]);var inst_12599 = (state_12610[2]);var inst_12587 = inst_12590;var state_12610__$1 = (function (){var statearr_12626 = state_12610;(statearr_12626[10] = inst_12599);
(statearr_12626[7] = inst_12587);
return statearr_12626;
})();var statearr_12627_12645 = state_12610__$1;(statearr_12627_12645[2] = null);
(statearr_12627_12645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12631 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12631[0] = state_machine__6161__auto__);
(statearr_12631[1] = 1);
return statearr_12631;
});
var state_machine__6161__auto____1 = (function (state_12610){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12610);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12632){if((e12632 instanceof Object))
{var ex__6164__auto__ = e12632;var statearr_12633_12646 = state_12610;(statearr_12633_12646[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12647 = state_12610;
state_12610 = G__12647;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12610){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12634 = f__6176__auto__.call(null);(statearr_12634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12635);
return statearr_12634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12782 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12752){var state_val_12753 = (state_12752[1]);if((state_val_12753 === 1))
{var inst_12715 = (new Array(n));var inst_12716 = inst_12715;var inst_12717 = 0;var state_12752__$1 = (function (){var statearr_12754 = state_12752;(statearr_12754[7] = inst_12717);
(statearr_12754[8] = inst_12716);
return statearr_12754;
})();var statearr_12755_12783 = state_12752__$1;(statearr_12755_12783[2] = null);
(statearr_12755_12783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 2))
{var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12752__$1,4,ch);
} else
{if((state_val_12753 === 3))
{var inst_12750 = (state_12752[2]);var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12752__$1,inst_12750);
} else
{if((state_val_12753 === 4))
{var inst_12720 = (state_12752[9]);var inst_12720__$1 = (state_12752[2]);var inst_12721 = (inst_12720__$1 == null);var inst_12722 = cljs.core.not.call(null,inst_12721);var state_12752__$1 = (function (){var statearr_12756 = state_12752;(statearr_12756[9] = inst_12720__$1);
return statearr_12756;
})();if(inst_12722)
{var statearr_12757_12784 = state_12752__$1;(statearr_12757_12784[1] = 5);
} else
{var statearr_12758_12785 = state_12752__$1;(statearr_12758_12785[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 5))
{var inst_12717 = (state_12752[7]);var inst_12716 = (state_12752[8]);var inst_12725 = (state_12752[10]);var inst_12720 = (state_12752[9]);var inst_12724 = (inst_12716[inst_12717] = inst_12720);var inst_12725__$1 = (inst_12717 + 1);var inst_12726 = (inst_12725__$1 < n);var state_12752__$1 = (function (){var statearr_12759 = state_12752;(statearr_12759[10] = inst_12725__$1);
(statearr_12759[11] = inst_12724);
return statearr_12759;
})();if(cljs.core.truth_(inst_12726))
{var statearr_12760_12786 = state_12752__$1;(statearr_12760_12786[1] = 8);
} else
{var statearr_12761_12787 = state_12752__$1;(statearr_12761_12787[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 6))
{var inst_12717 = (state_12752[7]);var inst_12738 = (inst_12717 > 0);var state_12752__$1 = state_12752;if(cljs.core.truth_(inst_12738))
{var statearr_12763_12788 = state_12752__$1;(statearr_12763_12788[1] = 12);
} else
{var statearr_12764_12789 = state_12752__$1;(statearr_12764_12789[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 7))
{var inst_12748 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12765_12790 = state_12752__$1;(statearr_12765_12790[2] = inst_12748);
(statearr_12765_12790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 8))
{var inst_12716 = (state_12752[8]);var inst_12725 = (state_12752[10]);var tmp12762 = inst_12716;var inst_12716__$1 = tmp12762;var inst_12717 = inst_12725;var state_12752__$1 = (function (){var statearr_12766 = state_12752;(statearr_12766[7] = inst_12717);
(statearr_12766[8] = inst_12716__$1);
return statearr_12766;
})();var statearr_12767_12791 = state_12752__$1;(statearr_12767_12791[2] = null);
(statearr_12767_12791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 9))
{var inst_12716 = (state_12752[8]);var inst_12730 = cljs.core.vec.call(null,inst_12716);var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12752__$1,11,out,inst_12730);
} else
{if((state_val_12753 === 10))
{var inst_12736 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12768_12792 = state_12752__$1;(statearr_12768_12792[2] = inst_12736);
(statearr_12768_12792[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 11))
{var inst_12732 = (state_12752[2]);var inst_12733 = (new Array(n));var inst_12716 = inst_12733;var inst_12717 = 0;var state_12752__$1 = (function (){var statearr_12769 = state_12752;(statearr_12769[7] = inst_12717);
(statearr_12769[8] = inst_12716);
(statearr_12769[12] = inst_12732);
return statearr_12769;
})();var statearr_12770_12793 = state_12752__$1;(statearr_12770_12793[2] = null);
(statearr_12770_12793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 12))
{var inst_12716 = (state_12752[8]);var inst_12740 = cljs.core.vec.call(null,inst_12716);var state_12752__$1 = state_12752;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12752__$1,15,out,inst_12740);
} else
{if((state_val_12753 === 13))
{var state_12752__$1 = state_12752;var statearr_12771_12794 = state_12752__$1;(statearr_12771_12794[2] = null);
(statearr_12771_12794[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 14))
{var inst_12745 = (state_12752[2]);var inst_12746 = cljs.core.async.close_BANG_.call(null,out);var state_12752__$1 = (function (){var statearr_12772 = state_12752;(statearr_12772[13] = inst_12745);
return statearr_12772;
})();var statearr_12773_12795 = state_12752__$1;(statearr_12773_12795[2] = inst_12746);
(statearr_12773_12795[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12753 === 15))
{var inst_12742 = (state_12752[2]);var state_12752__$1 = state_12752;var statearr_12774_12796 = state_12752__$1;(statearr_12774_12796[2] = inst_12742);
(statearr_12774_12796[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12778[0] = state_machine__6161__auto__);
(statearr_12778[1] = 1);
return statearr_12778;
});
var state_machine__6161__auto____1 = (function (state_12752){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12752);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12779){if((e12779 instanceof Object))
{var ex__6164__auto__ = e12779;var statearr_12780_12797 = state_12752;(statearr_12780_12797[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12752);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12779;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12798 = state_12752;
state_12752 = G__12798;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12752){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12781 = f__6176__auto__.call(null);(statearr_12781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12782);
return statearr_12781;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6175__auto___12941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_12911){var state_val_12912 = (state_12911[1]);if((state_val_12912 === 1))
{var inst_12870 = [];var inst_12871 = inst_12870;var inst_12872 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12911__$1 = (function (){var statearr_12913 = state_12911;(statearr_12913[7] = inst_12872);
(statearr_12913[8] = inst_12871);
return statearr_12913;
})();var statearr_12914_12942 = state_12911__$1;(statearr_12914_12942[2] = null);
(statearr_12914_12942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 2))
{var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12911__$1,4,ch);
} else
{if((state_val_12912 === 3))
{var inst_12909 = (state_12911[2]);var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12911__$1,inst_12909);
} else
{if((state_val_12912 === 4))
{var inst_12875 = (state_12911[9]);var inst_12875__$1 = (state_12911[2]);var inst_12876 = (inst_12875__$1 == null);var inst_12877 = cljs.core.not.call(null,inst_12876);var state_12911__$1 = (function (){var statearr_12915 = state_12911;(statearr_12915[9] = inst_12875__$1);
return statearr_12915;
})();if(inst_12877)
{var statearr_12916_12943 = state_12911__$1;(statearr_12916_12943[1] = 5);
} else
{var statearr_12917_12944 = state_12911__$1;(statearr_12917_12944[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 5))
{var inst_12879 = (state_12911[10]);var inst_12872 = (state_12911[7]);var inst_12875 = (state_12911[9]);var inst_12879__$1 = f.call(null,inst_12875);var inst_12880 = cljs.core._EQ_.call(null,inst_12879__$1,inst_12872);var inst_12881 = cljs.core.keyword_identical_QMARK_.call(null,inst_12872,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12882 = (inst_12880) || (inst_12881);var state_12911__$1 = (function (){var statearr_12918 = state_12911;(statearr_12918[10] = inst_12879__$1);
return statearr_12918;
})();if(cljs.core.truth_(inst_12882))
{var statearr_12919_12945 = state_12911__$1;(statearr_12919_12945[1] = 8);
} else
{var statearr_12920_12946 = state_12911__$1;(statearr_12920_12946[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 6))
{var inst_12871 = (state_12911[8]);var inst_12896 = inst_12871.length;var inst_12897 = (inst_12896 > 0);var state_12911__$1 = state_12911;if(cljs.core.truth_(inst_12897))
{var statearr_12922_12947 = state_12911__$1;(statearr_12922_12947[1] = 12);
} else
{var statearr_12923_12948 = state_12911__$1;(statearr_12923_12948[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 7))
{var inst_12907 = (state_12911[2]);var state_12911__$1 = state_12911;var statearr_12924_12949 = state_12911__$1;(statearr_12924_12949[2] = inst_12907);
(statearr_12924_12949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 8))
{var inst_12879 = (state_12911[10]);var inst_12871 = (state_12911[8]);var inst_12875 = (state_12911[9]);var inst_12884 = inst_12871.push(inst_12875);var tmp12921 = inst_12871;var inst_12871__$1 = tmp12921;var inst_12872 = inst_12879;var state_12911__$1 = (function (){var statearr_12925 = state_12911;(statearr_12925[7] = inst_12872);
(statearr_12925[8] = inst_12871__$1);
(statearr_12925[11] = inst_12884);
return statearr_12925;
})();var statearr_12926_12950 = state_12911__$1;(statearr_12926_12950[2] = null);
(statearr_12926_12950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 9))
{var inst_12871 = (state_12911[8]);var inst_12887 = cljs.core.vec.call(null,inst_12871);var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12911__$1,11,out,inst_12887);
} else
{if((state_val_12912 === 10))
{var inst_12894 = (state_12911[2]);var state_12911__$1 = state_12911;var statearr_12927_12951 = state_12911__$1;(statearr_12927_12951[2] = inst_12894);
(statearr_12927_12951[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 11))
{var inst_12879 = (state_12911[10]);var inst_12875 = (state_12911[9]);var inst_12889 = (state_12911[2]);var inst_12890 = [];var inst_12891 = inst_12890.push(inst_12875);var inst_12871 = inst_12890;var inst_12872 = inst_12879;var state_12911__$1 = (function (){var statearr_12928 = state_12911;(statearr_12928[7] = inst_12872);
(statearr_12928[8] = inst_12871);
(statearr_12928[12] = inst_12889);
(statearr_12928[13] = inst_12891);
return statearr_12928;
})();var statearr_12929_12952 = state_12911__$1;(statearr_12929_12952[2] = null);
(statearr_12929_12952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 12))
{var inst_12871 = (state_12911[8]);var inst_12899 = cljs.core.vec.call(null,inst_12871);var state_12911__$1 = state_12911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12911__$1,15,out,inst_12899);
} else
{if((state_val_12912 === 13))
{var state_12911__$1 = state_12911;var statearr_12930_12953 = state_12911__$1;(statearr_12930_12953[2] = null);
(statearr_12930_12953[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 14))
{var inst_12904 = (state_12911[2]);var inst_12905 = cljs.core.async.close_BANG_.call(null,out);var state_12911__$1 = (function (){var statearr_12931 = state_12911;(statearr_12931[14] = inst_12904);
return statearr_12931;
})();var statearr_12932_12954 = state_12911__$1;(statearr_12932_12954[2] = inst_12905);
(statearr_12932_12954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12912 === 15))
{var inst_12901 = (state_12911[2]);var state_12911__$1 = state_12911;var statearr_12933_12955 = state_12911__$1;(statearr_12933_12955[2] = inst_12901);
(statearr_12933_12955[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_12937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12937[0] = state_machine__6161__auto__);
(statearr_12937[1] = 1);
return statearr_12937;
});
var state_machine__6161__auto____1 = (function (state_12911){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_12911);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e12938){if((e12938 instanceof Object))
{var ex__6164__auto__ = e12938;var statearr_12939_12956 = state_12911;(statearr_12939_12956[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12957 = state_12911;
state_12911 = G__12957;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_12911){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_12911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_12940 = f__6176__auto__.call(null);(statearr_12940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto___12941);
return statearr_12940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map