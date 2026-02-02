import{j as e}from"./jsx-runtime-BDEaKAMA.js";import{r as i}from"./iframe-BOuOQg3k.js";import{M as C,N as I}from"./NestedMenu-CZSz0_bM.js";import{B as b}from"./Button-CG9KLHj8.js";import{I as y}from"./IconArrowDownloadFilled-BuwtwLy6.js";import{I as g,a as h,b as x}from"./IconBeach-pDywQasu.js";import{I as M}from"./IconMore-7tbVK-kJ.js";import{I as O}from"./IconCheckmark-DO01v-M4.js";import{I as n}from"./IconSettings-DEVyL9jC.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C4qDR7jW.js";import"./index-Dw5nglbG.js";import"./Text-BvG8_rry.js";import"./helpers-C8DjUGPs.js";import"./index-DYDl_GcV.js";import"./types-Cqtluz6G.js";import"./ModalConfirmation-BQq7Vjk1.js";import"./AnimatePresenceWrapper-C3FCwRhG.js";import"./IconDismiss-DgCwl4oo.js";import"./index-C_VFKIAh.js";import"./CollapseGroup-CgfeHQwa.js";import"./Divider-DmzCtzDZ.js";import"./IconChevronDown-BiySu0tk.js";import"./IconChevronUp-DGn1olSV.js";import"./IconChevronRight-Bog1leFf.js";import"./AvatarGroup-B8-c6l8v.js";import"./DropzoneFileUpload-BKqKas-4.js";import"./Label-DMVM9JFS.js";import"./useFormProps-Cj2DBhsn.js";import"./ErrorMessage-IndItNd2.js";import"./IconDynamicComponent-CrkN1pLp.js";import"./IconDelete-DC6wi70U.js";import"./Snackbar-DC0yBmu9.js";import"./Alert-nv3gwX1J.js";import"./IconDismissFilled-BbXvgntI.js";import"./Progress-DYWEGT7u.js";import"./IconAdd-Bpw_3Tp7.js";import"./Checkbox-B_MCzZjg.js";import"./Popover-Cb7VPDZF.js";import"./Link-D9mwOH43.js";import"./IconInfo-ChiCLdqx.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const be=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,be as __namedExportsOrder,Ce as default};
