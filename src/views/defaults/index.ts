/* tslint:disable:ordered-imports */
import { ViewTemplates } from '@lit-any/views'
import './hydrofoil-shell'
import './alcaeus-resource-viewer'
import './resource-link'
import './zoom-to-blank-icon'
import { html } from 'lit-html'

ViewTemplates.default.when.valueMatches(v => typeof v === 'string').renders((v: string) => v)

ViewTemplates.default.when
  .valueMatches(v => Array.isArray(v))
  .renders(
    (v: any[], render) =>
      html`
        ${v.map(
          el =>
            html`
              ${render(el)}
            `,
        )}
      `,
  )
