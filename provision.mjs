#!/usr/bin/env zx

async function download_bat() {
    if (await $`type bat`.exitCode == 0) {
        return
    }
    const VERSION = '0.18.3'
    const DPKG_FILE = `bat_${VERSION}_amd64.deb`

    if (await $`[[ -f ${DPKG_FILE} ]]`.exitCode == 0) {
        return
    }

    const URL = `https://github.com/sharkdp/bat/releases/download/v${VERSION}/${DPKG_FILE}`
    return $`wget ${URL}`
}

async function install_bat() {
    if (await $`type bat`.exitCode == 0) {
        return
    }

    const VERSION = '0.18.3'
    const DPKG_FILE = `bat_${VERSION}_amd64.deb`
    return $`sudo dpkg -i ${DPKG_FILE}`
}

async function download_fd() {
    if (await $`type fd`.exitCode == 0) {
        return
    }

    const VERSION = '8.2.1'
    const DPKG_FILE = `fd_${VERSION}_amd64.deb`

    if (await $`[[ -f ${DPKG_FILE} ]]`.exitCode == 0) {
        return
    }

    const URL = `https://github.com/sharkdp/fd/releases/download/v${VERSION}/${DPKG_FILE}`
    return $`wget ${URL}`
}

async function install_fd() {
    if (await $`type fd`.exitCode == 0) {
        return
    }
    const VERSION = '8.2.1'
    const DPKG_FILE = `fd_${VERSION}_amd64.deb`
    return $`sudo dpkg -i ${DPKG_FILE}`
}

await Promise.all(
    [download_bat(),
    download_fd()])
await install_bat()
await install_fd()
