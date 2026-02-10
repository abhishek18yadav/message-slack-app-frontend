export default function conbineContext(...providers) {
    return ({ children }) => {
        return providers.reduceRight((accumlator, Currentprovider) => {
            return <Currentprovider>{accumlator}</Currentprovider>
        }, children)
    }
}


/**
 * <A>
 *  <B>
 *      <C>
 *          <D>
 *          {children}
 *         </D>
 *      </C>
 *   </B>
 * </A>
 */

/**
 * <Combined>
 * {children}
 * </Combined>
 */