import utils from '@docusaurus/utils';

/**
 * @param {import('@docusaurus/types').LoadContext} context
 * @returns {import('@docusaurus/types').Plugin}
 */
export default function FeatureRequestsPlugin(context) {
  return {
    name: 'feature-requests-plugin',
    async contentLoaded({actions}) {
      const basePath = utils.normalizeUrl([
        context.baseUrl,
        '/feature-requests',
      ]);
      const paths = await actions.createData(
        'paths.json',
        JSON.stringify(basePath),
      );
      actions.addRoute({
        path: basePath,
        exact: false,
        component: '@site/src/plugins/featureRequests/FeatureRequestsPage',
        modules: {
          basePath: paths,
        },
      });
    },
  };
}