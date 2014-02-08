// Compiled by ClojureScript 0.0-2138
goog.provide('memo_cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
memo_cljs.core.generate_cards = (function generate_cards(){var cards = cljs.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.repeat,2),cljs.core.range.call(null,16));return cljs.core.shuffle.call(null,cards);
});
memo_cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deck","deck",1016983579),cljs.core.mapv.call(null,(function (p1__9052_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"kind","kind",1017196294),new cljs.core.Keyword(null,"face-up","face-up",4216478589),new cljs.core.Keyword(null,"on-deck","on-deck",3936409417)],[p1__9052_SHARP_,false,true]);
}),memo_cljs.core.generate_cards.call(null)),new cljs.core.Keyword(null,"players","players",520336676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Igor",new cljs.core.Keyword(null,"score","score",1123168772),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Lina",new cljs.core.Keyword(null,"score","score",1123168772),0], null)], null),new cljs.core.Keyword(null,"current-player","current-player",2351550759),0,new cljs.core.Keyword(null,"deck-disabled","deck-disabled",1074061970),false], null));
memo_cljs.core.face_up_cards = (function face_up_cards(p__9054){var map__9056 = p__9054;var map__9056__$1 = ((cljs.core.seq_QMARK_.call(null,map__9056))?cljs.core.apply.call(null,cljs.core.hash_map,map__9056):map__9056);var deck = cljs.core.get.call(null,map__9056__$1,new cljs.core.Keyword(null,"deck","deck",1016983579));return cljs.core.filter.call(null,(function (p1__9053_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"face-up","face-up",4216478589).cljs$core$IFn$_invoke$arity$1(p1__9053_SHARP_),true);
}),deck);
});
memo_cljs.core.current_player = (function current_player(app_state){return cljs.core.nth.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(app_state));
});
memo_cljs.core.switch_to_next_player = (function switch_to_next_player(app_state){var new_deck = cljs.core.mapv.call(null,(function (p1__9057_SHARP_){return cljs.core.assoc.call(null,p1__9057_SHARP_,new cljs.core.Keyword(null,"face-up","face-up",4216478589),false);
}),new cljs.core.Keyword(null,"deck","deck",1016983579).cljs$core$IFn$_invoke$arity$1(app_state));var next_player = (new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(app_state) + 1);var next_player__$1 = cljs.core.rem.call(null,next_player,cljs.core.count.call(null,new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(app_state)));var new_state = cljs.core.assoc.call(null,app_state,new cljs.core.Keyword(null,"deck","deck",1016983579),new_deck,new cljs.core.Keyword(null,"current-player","current-player",2351550759),next_player__$1);return new_state;
});
memo_cljs.core.inc_score = (function inc_score(app_state){var new_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",520336676),new cljs.core.Keyword(null,"current-player","current-player",2351550759).cljs$core$IFn$_invoke$arity$1(app_state),new cljs.core.Keyword(null,"score","score",1123168772)], null),cljs.core._PLUS_,2);return cljs.core.update_in.call(null,new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1016983579)], null),(function (deck){return cljs.core.mapv.call(null,(function (p1__9058_SHARP_){if(cljs.core.truth_(new cljs.core.Keyword(null,"face-up","face-up",4216478589).cljs$core$IFn$_invoke$arity$1(p1__9058_SHARP_)))
{return cljs.core.assoc.call(null,p1__9058_SHARP_,new cljs.core.Keyword(null,"on-deck","on-deck",3936409417),false);
} else
{return p1__9058_SHARP_;
}
}),deck);
}));
});
memo_cljs.core.wait_and_go_on = (function wait_and_go_on(app_state,win_QMARK_){cljs.core.swap_BANG_.call(null,app_state,(function (p1__9059_SHARP_){return cljs.core.assoc.call(null,p1__9059_SHARP_,new cljs.core.Keyword(null,"deck-disabled","deck-disabled",1074061970),true);
}));
var c__6175__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6176__auto__ = (function (){var switch__6160__auto__ = (function (state_9112){var state_val_9113 = (state_9112[1]);if((state_val_9113 === 8))
{var inst_9109 = (state_9112[2]);var inst_9110 = cljs.core.swap_BANG_.call(null,app_state,memo_cljs.core.switch_to_next_player);var state_9112__$1 = (function (){var statearr_9114 = state_9112;(statearr_9114[7] = inst_9109);
return statearr_9114;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9112__$1,inst_9110);
} else
{if((state_val_9113 === 7))
{var state_9112__$1 = state_9112;var statearr_9115_9131 = state_9112__$1;(statearr_9115_9131[2] = null);
(statearr_9115_9131[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9113 === 6))
{var inst_9106 = cljs.core.swap_BANG_.call(null,app_state,memo_cljs.core.inc_score);var state_9112__$1 = state_9112;var statearr_9116_9132 = state_9112__$1;(statearr_9116_9132[2] = inst_9106);
(statearr_9116_9132[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9113 === 5))
{var inst_9099 = (state_9112[2]);var inst_9100 = cljs.core.async.timeout.call(null,inst_9099);var state_9112__$1 = state_9112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9112__$1,2,inst_9100);
} else
{if((state_val_9113 === 4))
{var state_9112__$1 = state_9112;var statearr_9117_9133 = state_9112__$1;(statearr_9117_9133[2] = 1500);
(statearr_9117_9133[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9113 === 3))
{var state_9112__$1 = state_9112;var statearr_9118_9134 = state_9112__$1;(statearr_9118_9134[2] = 500);
(statearr_9118_9134[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9113 === 2))
{var inst_9102 = (state_9112[2]);var inst_9103 = (function (){return ((function (inst_9102,state_val_9113){
return (function (p1__9060_SHARP_){return cljs.core.assoc.call(null,p1__9060_SHARP_,new cljs.core.Keyword(null,"deck-disabled","deck-disabled",1074061970),false);
});
;})(inst_9102,state_val_9113))
})();var inst_9104 = cljs.core.swap_BANG_.call(null,app_state,inst_9103);var state_9112__$1 = (function (){var statearr_9119 = state_9112;(statearr_9119[8] = inst_9104);
(statearr_9119[9] = inst_9102);
return statearr_9119;
})();if(cljs.core.truth_(win_QMARK_))
{var statearr_9120_9135 = state_9112__$1;(statearr_9120_9135[1] = 6);
} else
{var statearr_9121_9136 = state_9112__$1;(statearr_9121_9136[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9113 === 1))
{var state_9112__$1 = state_9112;if(cljs.core.truth_(win_QMARK_))
{var statearr_9122_9137 = state_9112__$1;(statearr_9122_9137[1] = 3);
} else
{var statearr_9123_9138 = state_9112__$1;(statearr_9123_9138[1] = 4);
}
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
});return ((function (switch__6160__auto__){
return (function() {
var state_machine__6161__auto__ = null;
var state_machine__6161__auto____0 = (function (){var statearr_9127 = [null,null,null,null,null,null,null,null,null,null];(statearr_9127[0] = state_machine__6161__auto__);
(statearr_9127[1] = 1);
return statearr_9127;
});
var state_machine__6161__auto____1 = (function (state_9112){while(true){
var ret_value__6162__auto__ = (function (){try{while(true){
var result__6163__auto__ = switch__6160__auto__.call(null,state_9112);if(cljs.core.keyword_identical_QMARK_.call(null,result__6163__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6163__auto__;
}
break;
}
}catch (e9128){if((e9128 instanceof Object))
{var ex__6164__auto__ = e9128;var statearr_9129_9139 = state_9112;(statearr_9129_9139[5] = ex__6164__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6162__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9140 = state_9112;
state_9112 = G__9140;
continue;
}
} else
{return ret_value__6162__auto__;
}
break;
}
});
state_machine__6161__auto__ = function(state_9112){
switch(arguments.length){
case 0:
return state_machine__6161__auto____0.call(this);
case 1:
return state_machine__6161__auto____1.call(this,state_9112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6161__auto____0;
state_machine__6161__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6161__auto____1;
return state_machine__6161__auto__;
})()
;})(switch__6160__auto__))
})();var state__6177__auto__ = (function (){var statearr_9130 = f__6176__auto__.call(null);(statearr_9130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6175__auto__);
return statearr_9130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6177__auto__);
}));
return c__6175__auto__;
});
memo_cljs.core.make_move = (function make_move(_,card){if(cljs.core.truth_((function (){var or__3408__auto__ = new cljs.core.Keyword(null,"deck-disabled","deck-disabled",1074061970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,memo_cljs.core.app_state));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return new cljs.core.Keyword(null,"face-up","face-up",4216478589).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,card));
}
})()))
{return null;
} else
{om.core.transact_BANG_.call(null,card,(function (p1__9141_SHARP_){return cljs.core.assoc.call(null,p1__9141_SHARP_,new cljs.core.Keyword(null,"face-up","face-up",4216478589),true);
}));
var face_up = memo_cljs.core.face_up_cards.call(null,cljs.core.deref.call(null,memo_cljs.core.app_state));var next_player_move_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,face_up),2);var cards_equal_QMARK_ = ((next_player_move_QMARK_)?cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,face_up,0)),new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,face_up,1))):false);if(next_player_move_QMARK_)
{return memo_cljs.core.wait_and_go_on.call(null,memo_cljs.core.app_state,cards_equal_QMARK_);
} else
{return null;
}
}
});
memo_cljs.core.card_view = (function card_view(card,owner){if(typeof memo_cljs.core.t9146 !== 'undefined')
{} else
{
/**
* @constructor
*/
memo_cljs.core.t9146 = (function (owner,card,card_view,meta9147){
this.owner = owner;
this.card = card;
this.card_view = card_view;
this.meta9147 = meta9147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
memo_cljs.core.t9146.cljs$lang$type = true;
memo_cljs.core.t9146.cljs$lang$ctorStr = "memo-cljs.core/t9146";
memo_cljs.core.t9146.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"memo-cljs.core/t9146");
});
memo_cljs.core.t9146.prototype.om$core$IRender$ = true;
memo_cljs.core.t9146.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var class$ = [cljs.core.str("card"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"face-up","face-up",4216478589).cljs$core$IFn$_invoke$arity$1(self__.card))?[cljs.core.str(" faceup kind-"),cljs.core.str(new cljs.core.Keyword(null,"kind","kind",1017196294).cljs$core$IFn$_invoke$arity$1(self__.card))].join(''):null))].join('');var class$__$1 = [cljs.core.str(class$),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"on-deck","on-deck",3936409417).cljs$core$IFn$_invoke$arity$1(self__.card))?null:" empty"))].join('');var props = {"onClick": (cljs.core.truth_(new cljs.core.Keyword(null,"on-deck","on-deck",3936409417).cljs$core$IFn$_invoke$arity$1(self__.card))?((function (class$,class$__$1){
return (function (p1__9142_SHARP_){return memo_cljs.core.make_move.call(null,p1__9142_SHARP_,self__.card);
});})(class$,class$__$1))
:null), "className": class$__$1};return React.DOM.div(props);
});
memo_cljs.core.t9146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9148){var self__ = this;
var _9148__$1 = this;return self__.meta9147;
});
memo_cljs.core.t9146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9148,meta9147__$1){var self__ = this;
var _9148__$1 = this;return (new memo_cljs.core.t9146(self__.owner,self__.card,self__.card_view,meta9147__$1));
});
memo_cljs.core.__GT_t9146 = (function __GT_t9146(owner__$1,card__$1,card_view__$1,meta9147){return (new memo_cljs.core.t9146(owner__$1,card__$1,card_view__$1,meta9147));
});
}
return (new memo_cljs.core.t9146(owner,card,card_view,null));
});
memo_cljs.core.deck_view = (function deck_view(deck,owner){if(typeof memo_cljs.core.t9153 !== 'undefined')
{} else
{
/**
* @constructor
*/
memo_cljs.core.t9153 = (function (owner,deck,deck_view,meta9154){
this.owner = owner;
this.deck = deck;
this.deck_view = deck_view;
this.meta9154 = meta9154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
memo_cljs.core.t9153.cljs$lang$type = true;
memo_cljs.core.t9153.cljs$lang$ctorStr = "memo-cljs.core/t9153";
memo_cljs.core.t9153.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"memo-cljs.core/t9153");
});
memo_cljs.core.t9153.prototype.om$core$IRender$ = true;
memo_cljs.core.t9153.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,{"className": "deck"},(function (){var deck__$2 = cljs.core.partition.call(null,8,self__.deck);return cljs.core.map.call(null,(function (p1__9149_SHARP_){return cljs.core.apply.call(null,om.dom.div,{"className": "row"},om.core.build_all.call(null,memo_cljs.core.card_view,cljs.core.nth.call(null,deck__$2,p1__9149_SHARP_)));
}),cljs.core.range.call(null,cljs.core.count.call(null,deck__$2)));
})());
});
memo_cljs.core.t9153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9155){var self__ = this;
var _9155__$1 = this;return self__.meta9154;
});
memo_cljs.core.t9153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9155,meta9154__$1){var self__ = this;
var _9155__$1 = this;return (new memo_cljs.core.t9153(self__.owner,self__.deck,self__.deck_view,meta9154__$1));
});
memo_cljs.core.__GT_t9153 = (function __GT_t9153(owner__$1,deck__$1,deck_view__$1,meta9154){return (new memo_cljs.core.t9153(owner__$1,deck__$1,deck_view__$1,meta9154));
});
}
return (new memo_cljs.core.t9153(owner,deck,deck_view,null));
});
memo_cljs.core.game_view = (function game_view(app,owner){if(typeof memo_cljs.core.t9160 !== 'undefined')
{} else
{
/**
* @constructor
*/
memo_cljs.core.t9160 = (function (owner,app,game_view,meta9161){
this.owner = owner;
this.app = app;
this.game_view = game_view;
this.meta9161 = meta9161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
memo_cljs.core.t9160.cljs$lang$type = true;
memo_cljs.core.t9160.cljs$lang$ctorStr = "memo-cljs.core/t9160";
memo_cljs.core.t9160.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"memo-cljs.core/t9160");
});
memo_cljs.core.t9160.prototype.om$core$IRender$ = true;
memo_cljs.core.t9160.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,[cljs.core.str("Current player: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(memo_cljs.core.current_player.call(null,cljs.core.deref.call(null,self__.app))))].join('')),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__9156_SHARP_){return React.DOM.h2(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__9156_SHARP_),": ",new cljs.core.Keyword(null,"score","score",1123168772).cljs$core$IFn$_invoke$arity$1(p1__9156_SHARP_));
}),new cljs.core.Keyword(null,"players","players",520336676).cljs$core$IFn$_invoke$arity$1(self__.app))),om.core.build.call(null,memo_cljs.core.deck_view,new cljs.core.Keyword(null,"deck","deck",1016983579).cljs$core$IFn$_invoke$arity$1(self__.app)));
});
memo_cljs.core.t9160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9162){var self__ = this;
var _9162__$1 = this;return self__.meta9161;
});
memo_cljs.core.t9160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9162,meta9161__$1){var self__ = this;
var _9162__$1 = this;return (new memo_cljs.core.t9160(self__.owner,self__.app,self__.game_view,meta9161__$1));
});
memo_cljs.core.__GT_t9160 = (function __GT_t9160(owner__$1,app__$1,game_view__$1,meta9161){return (new memo_cljs.core.t9160(owner__$1,app__$1,game_view__$1,meta9161));
});
}
return (new memo_cljs.core.t9160(owner,app,game_view,null));
});
om.core.root.call(null,memo_cljs.core.app_state,memo_cljs.core.game_view,document.getElementById("game"));

//# sourceMappingURL=core.js.map