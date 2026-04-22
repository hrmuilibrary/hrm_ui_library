import{j as e}from"./jsx-runtime-3P3vag9i.js";import{r as i}from"./iframe-Cpsg4asw.js";import{M as C,N as I}from"./NestedMenu-Do_x0KyV.js";import{B as b}from"./Button-DoN8yXVl.js";import{I as y}from"./IconArrowDownloadFilled-CJccAXsT.js";import{I as g,a as h,b as x}from"./IconBeach-DJAdvwjb.js";import{I as M}from"./IconMore-DMp7LMJy.js";import{I as O}from"./IconCheckmark-CHKHEumT.js";import{I as n}from"./IconSettings-CilzDNHd.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-C_ZFxAPF.js";import"./index-Ben75hYQ.js";import"./Text-3bg6BdB8.js";import"./helpers-BRhFxdP-.js";import"./index-AboGxAif.js";import"./types-CbtXEBJj.js";import"./index-D5l1nwKk.js";import"./Popover-DymdWVru.js";import"./IconDismiss-CoWWE6Xd.js";import"./Link-C8NSzvKS.js";import"./CollapseGroup-BkumSN_f.js";import"./Divider-DzXlkHUu.js";import"./AnimatePresenceWrapper-CaBpg4mX.js";import"./IconChevronDown-DS0K6_rb.js";import"./IconChevronUp-B8l_6ewH.js";import"./IconChevronRight-BcqabUJS.js";import"./AvatarGroup-D2pFaS-1.js";import"./DropzoneFileUpload-DLXt9zvp.js";import"./Label-ChDFgmyM.js";import"./useFormProps-CTdDNdd0.js";import"./ErrorMessage-CzSWCZXu.js";import"./IconDynamicComponent-BbfTy0q9.js";import"./Snackbar-a7ROzi7O.js";import"./Alert-Cg9jg3TC.js";import"./IconDismissFilled-sy62c-BH.js";import"./Progress-Bznpz-6k.js";import"./IconAdd-BTr8eBAg.js";import"./Checkbox-BTk_gH3g.js";import"./IconInfo-Cfx0xM2A.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
