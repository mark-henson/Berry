import {Resolver, ResolveOptions, MinimalResolveOptions} from '@berry/core';
import {httpUtils, structUtils}                          from '@berry/core';
import {LinkType}                                        from '@berry/core';
import {Ident, Descriptor, Locator, Package}             from '@berry/core';

import * as githubUtils                                  from './githubUtils';

export class GithubResolver implements Resolver {
  supportsDescriptor(descriptor: Descriptor, opts: MinimalResolveOptions) {
    return githubUtils.isGithubUrl(descriptor.range);
  }

  supportsLocator(locator: Locator, opts: MinimalResolveOptions) {
    return githubUtils.isGithubUrl(locator.reference);
  }

  shouldPersistResolution(locator: Locator, opts: MinimalResolveOptions) {
    return true;
  }

  async normalizeDescriptor(descriptor: Descriptor, fromLocator: Locator, opts: MinimalResolveOptions) {
    return descriptor;
  }

  async getCandidates(descriptor: Descriptor, opts: ResolveOptions) {
    return [descriptor.range];
  }

  async resolve(locator: Locator, opts: ResolveOptions) {
    const languageName = opts.project.configuration.defaultLanguageName;
    const linkType = LinkType.HARD;

    const dependencies = new Map();
    const peerDependencies = new Map();

    return {... locator, languageName, linkType, dependencies, peerDependencies};
  }
}
