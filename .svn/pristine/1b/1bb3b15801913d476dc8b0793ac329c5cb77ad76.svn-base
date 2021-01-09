import {Loading} from 'element-ui';
let needLoadingRequestCount = 0;
let loading;
function startLoading () {
    loading = Loading.service({
        lock: true,
        text: this.$t("WipeLoading"),
        background: 'rgba(0, 0, 0, 0.7)'
    })
};
function endLoading() {
    loading.close()
};
const tryCloseLoading = () => {
    if (needLoadingRequestCount === 0) {
        endLoading();
    }
};
export function showFullScreenLoading () {
    if (needLoadingRequestCount === 0) {
        startLoading();
    }
    needLoadingRequestCount++;
}

export function tryHideFullScreenLoading () {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        // _.debounce(tryCloseLoading, 300)()
        tryCloseLoading()
    }
}