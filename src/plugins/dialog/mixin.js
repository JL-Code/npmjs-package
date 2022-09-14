import {cloneDeep} from "lodash";

export default {
  data() {
    return {
      $_embedded_iframe: false
    };
  },
  mounted() {
    this.$_embedded_iframe = this.$route
      ? this.$route.query.embedded_iframe
      : false;
  },
  methods: {
    $_postMessage(eventType, payload = {}) {
      const {protocol, host} = window.location;
      const origin = `${protocol}//${host}`;
      const eventData = {
        payload,
        eventType,
        eventId: Date.now(),
        timestamp: Date.now()
      };
      window.postMessage(eventData, origin);
    },
    submit_(payload = {}) {
      if (this.$_embedded_iframe) {
        if (payload instanceof MouseEvent) {
          payload = {};
        }
        this.$_postMessage("submit", payload);
      } else {
        this.$emit("submit", cloneDeep(payload));
      }
    },
    cancel_(payload = {}) {
      if (this.$_embedded_iframe) {
        if (payload instanceof MouseEvent) {
          payload = {};
        }
        this.$_postMessage("cancel", payload);
      } else {
        this.$emit("cancel", cloneDeep(payload));
      }
    }
  }
};
